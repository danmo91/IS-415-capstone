import React from 'react';
import './navbar.scss';
import {RouteHandler, Link, History} from 'react-router';
import Auth from './../../services/auth';

const Navbar = React.createClass ({
  mixins: [History],

  getDefaultProps() {
    return {
      loggedIn: false,
      email: null
    }
  },

  handleLogout(e) {
    e.preventDefault();
    Auth.logout(() => {
      this.history.pushState(null, '/', '')
    });
  },

  render: function () {

    let navRight;
    if(this.props.loggedIn) {
      navRight = (
        <ul className="navbar-brand link-right">
          <li>
            <a href="#" onClick={this.handleLogout}>Log out</a>
          </li>
          <li>
            <Link to="/home">{this.props.email}</Link>
          </li>
        </ul>
      )
    } else {
      navRight = (
        <ul className="navbar-brand link-right">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )
    }

    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand brand"><Link to="/">Brand</Link></div>
            {navRight}
          </div>
        </div>
      </nav>
    )
  }

});

export default Navbar;
