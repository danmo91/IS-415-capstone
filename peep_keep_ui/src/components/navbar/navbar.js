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

  handleNewExperience(e) {
    e.preventDefault();
    localStorage.experience_id = 'null';
    // redirect to experience_edit
    this.history.pushState(null, '/experience_edit', '')
  },
  handleDeleteExperience(e) {
    e.preventDefault();

    // make ajax call to delete experience
    $.ajax({
      url: 'http://localhost:3000/api/v1/experience/' + localStorage.experience_id,
      method: 'DELETE',
      success: (data) => {
        console.log(data);
      },
    });
    localStorage.experience_id = 'null';
    this.history.pushState(null, '/detail', '')
  },

  handleNewPerson(e) {
    e.preventDefault();
    localStorage.person_id = 'null';
    // redirect to person_edit
    this.history.pushState(null, '/person_edit', '')
  },

  handleDeletePerson(e) {
    e.preventDefault();

    // make ajax call to delete experience
    $.ajax({
      url: 'http://localhost:3000/api/v1/person/' + localStorage.person_id,
      method: 'DELETE',
      success: (data) => {
        console.log(data);
      },
    });
    localStorage.experience_id = 'null';
    this.history.pushState(null, '/home', '')
  },

  render() {

    let navLeft;
    let navRight;

    let location = window.location.pathname;


    if (this.props.loggedIn)
    {

      if (location == '/detail') {
        console.log('rendering nav');
        navLeft = (
          <Link className="navbar navbar-left" to="/home">Back</Link>
        )
        navRight = (
          <ul className="navbar navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bars"></i></a>
              <ul className="dropdown-menu dropdown-left">
                <li><Link to="/person_edit">Edit</Link></li>
                <li><a onClick={this.handleNewExperience} href="#">New Experience</a></li>
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
            <Link to="/experience_edit">Edit</Link>
          </div>

        )
      } else if (location == '/experience_edit') {
        navLeft = (
          <Link className="navbar navbar-left" to="/experience">Back</Link>
        )
        navRight = (
          <div className="navbar navbar-right">
            <a onClick={this.handleDeleteExperience} href="#">Delete</a>
          </div>
        )
      } else if (location == '/person_edit') {
        navLeft = (
          <Link className="navbar navbar-left" to="/detail">Back</Link>
        )
        navRight = (
          <div className="navbar navbar-right">
            <a onClick={this.handleDeletePerson} href="#">Delete</a>
          </div>
        )
      }

      else {
        navLeft = (
          <ul className="navbar navbar-left">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.name}<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><Link to="/home" >Home</Link></li>
                <li role="separator" className="divider"></li>
                <li><a href="#" onClick={this.handleLogout}>Log out</a></li>
              </ul>
            </li>
          </ul>
        )

        navRight = (
          <div className="navbar navbar-right">
            <a onClick={this.handleNewPerson} href="#">New</a>
          </div>
        )
      }


    } else {

      navLeft = (
        <Link className="navbar navbar-left" to="/" >Peep Keep</Link>
      )

      navRight = (
        <Link className="navbar navbar-right" to="/login" >Log in</Link>
      )
    }



    return (
      <div className="menu">
        <nav className="navbar navbar-landing">
          <div className="container-fluid">
            <div className="navbar-header">
              {navLeft}
              {navRight}
            </div>
          </div>
        </nav>
      </div>
    )

  }


});

export default Navbar;
