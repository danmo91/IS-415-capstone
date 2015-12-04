import React from 'react';
import {Link} from 'react-router';
import './landing_navbar.scss';



const LandingNavbar = React.createClass ({

  render() {

    return (
      <div className="menu">
        <nav className="navbar navbar-landing">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar navbar-left" to="/" >Brand</Link>
              <Link className="navbar navbar-right" to="/login" >Log in</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }


});

export default LandingNavbar;
