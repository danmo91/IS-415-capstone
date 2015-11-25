import React from 'react';
import './navbar.scss';
import {RouteHandler, Link} from 'react-router';

const Navbar = React.createClass ({

  render: function () {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand brand"><Link to="/">Brand</Link></div>
            <div className="navbar-brand link-right"><Link to="/login">Login</Link></div>
          </div>
        </div>
      </nav>
    )
  }

});

export default Navbar;
