module.exports.DATABASE_URL= process.env.DATABASE_URL || global.DATABASE_URL || 
`mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds143131.mlab.com:43131/mandarinx` || `mongodb://localhost/mandarinx`;

module.exports.PORT= process.env.PORT || 3001 
