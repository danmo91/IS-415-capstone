import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Landing from './pages/landing'
import Navbar from './components/navbar/navbar'
import Login from 'pages/login'
import Signup from 'pages/signup'
import Home from 'pages/home'

const App = React.createClass({

  render() {
    return (
      <main>
        <Navbar />
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
    </Route>
  </Router>),
document.getElementById('content'));
