import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Auth from './services/auth'


import Landing from './pages/landing'
import Navbar from './components/navbar/navbar'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import Detail from './pages/detail'
import Experience from './pages/experience'
import EditExperience from './pages/edit-experience'
import EditPerson from './pages/edit-person'

const App = React.createClass({
  getInitialState() {
      return {
        loggedIn: Auth.loggedIn(),
        name: Auth.getName()
      }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    Auth.onChange = this.updateAuth;
  },

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
});

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App} >
      <IndexRoute component={Landing} />
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
      <Route path='home' component={Home} />
      <Route path='detail' component={Detail} />
      <Route path='experience' component={Experience} />
      <Route path='experience_edit' component={EditExperience} />
      <Route path='person_edit' component={EditPerson} />
    </Route>
  </Router>),
document.getElementById('content'));
