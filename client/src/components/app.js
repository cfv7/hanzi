import React from 'react';
import * as Cookies from 'js-cookie';
import QuestionPage from './question-page';
import LoginPage from './login-page';
import Dashboard from './dashboard';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      fetch('/api/me', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }).then(res => {
        if (!res.ok) {
          if (res.status === 401) {
            Cookies.remove('accessToken');
            return;
          }
          throw new Error(res.statusText);
        }
        return res.json();
      }).then(currentUser =>
        this.setState({
          currentUser
        })
        );
    }
  }

  render() {
    if (this.state.currentUser) {
      if(this.props.userQuizChoice){
        return <QuestionPage />
      }
      return <Dashboard />;
    }
    return <LoginPage />;
  }
}
const mapStateToProps = state => ({
  userQuizChoice: state.userQuizChoice,
})

export default connect(mapStateToProps)(App);
