import React from 'react';
import './navbar.scss';
import {RouteHandler, Link, History, State} from 'react-router';
import Auth from './../../services/auth';



const Navbar = React.createClass ({
  mixins: [History, State],

  getDefaultProps() {
    return {
      loggedIn: false,
      name: '',
    }
  },

  handleLogout(e) {
    e.preventDefault();
    Auth.logout(() => {
      this.history.pushState(null, '/', '')
    });
  },

  render() {

    let navLeft;
    let navRight;

    let location = window.location.pathname;


    if (this.props.loggedIn)
    {

      if (location == '/detail') {
        navLeft = (
          <Link className="navbar navbar-left" to="/home">Back</Link>
        )
        navRight = (
          <ul className="navbar navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
              <ul className="dropdown-menu dropdown-left">
                <li><a href="#">Edit</a></li>
                <li><a href="#">New Experience</a></li>
              </ul>
            </li>
          </ul>
        )
      } else if (location == '/experience') {
        navLeft = (
          <Link className="navbar navbar-left" to="/detail">Back</Link>
        )
        navRight = (
          <div className="navbar navbar-right">
            <a href="#">Edit</a>
          </div>

        )
      } else {
        navLeft = (
          <ul className="navbar navbar-left">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.name}<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#" onClick={this.handleLogout}>Log out</a></li>
              </ul>
            </li>
          </ul>
        )

        navRight = (
          <div className="navbar navbar-right">
            <a href="#">New</a>
          </div>
        )
      }


    } else {

      navLeft = (
        <Link className="navbar navbar-left" to="/" >Brand</Link>
      )

      navRight = (
        <Link className="navbar navbar-right" to="/login" >Log in</Link>
      )
    }



    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            {navLeft}
            {navRight}
          </div>
        </div>
      </nav>
    )

  }


});

export default Navbar;
