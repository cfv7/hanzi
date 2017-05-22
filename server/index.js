
require('dotenv').config();
const { DATABASE_URL, PORT } = require('./config');
const path = require('path');
const { User, QuizItem } = require('./models');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


mongoose.Promise = global.Promise;

let secret = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
}

if (process.env.NODE_ENV != 'production') {
  secret = require('./secret');
}

const app = express();

app.use(passport.initialize());

passport.use(
  new GoogleStrategy({
    clientID: secret.CLIENT_ID,
    clientSecret: secret.CLIENT_SECRET,
    callbackURL: `/api/auth/google/callback`
  },
    (accessToken, refreshToken, profile, cb) => {
      // Job 1: Set up Mongo/Mongoose, create a User model which store the
      // google id, and the access token
      // Job 2: Update this callback to either update or create the user
      // so it contains the correct access token
      User
        .findOneAndUpdate(
          {googleId: profile.id, displayName: profile.displayName}, 
          {$set: {accessToken: accessToken, googleId: profile.id}},{upsert: true, new:true})
        .then((user) => {
          // console.log('findOneAndUpdate ->',users)
          return cb(null, user);
        })
        .catch(err => {
          console.error(err)
        })
    })
);

passport.use(
  new BearerStrategy(
    (token, done) => {
      // Job 3: Update this callback to try to find a user with a
      // matching access token.  If they exist, let em in, if not,
      // don't.
      // console.log(`token to look for ${token}`)
      User.findOne({accessToken: token})
      .then((user) => {
        console.log('USER=>', user)
        if(user){
          // console.log(`I am in BEARER STRATEGY ${user}`)
          return done(null, user);
        }
      })
      .catch(err => {console.error(err)})
    }
  )
);

app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/api/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  }),
  (req, res) => {
    res.cookie('accessToken', req.user.accessToken, { expires: 0 });
    res.redirect('/');
  }
);

app.get('/api/auth/logout', (req, res) => {
  req.logout();
  res.clearCookie('accessToken');
  res.redirect('/');
});

app.get('/api/me',
  passport.authenticate('bearer', { session: false }),
  (req, res) => res.json({
    googleId: req.user.googleId,
    displayName: req.user.displayName
  })
);

app.get('/api/questions',
  passport.authenticate('bearer', { session: false }),
  (req, res) => {
    QuizItem
      .find()
      .exec()
      .then(data => {
        return res.json(data)
      })
      .catch(err => console.error(err))
  }
);

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(databaseUrl = DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
