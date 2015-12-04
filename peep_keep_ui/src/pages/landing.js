import React from 'react';
import {RouteHandler, Link} from 'react-router';
import './../styles/landing.scss'
import Image from './../images/cover.jpeg';
import LandingNavbar from './../components/landing_navbar/landing_navbar'

const Landing = React.createClass({

  render: function () {
    // set background image
    let image_url = 'url(' + Image + ')';
    let height = window.innerHeight + 'px';

    var divStyle = {
      background: image_url + ' no-repeat center fixed',
      backgroundSize: 'cover',
      minHeight: height,
      position: 'absolute',
      zIndex: '-1',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    return(
      <div>
        <LandingNavbar />
        <div className="landing">
          <div className="background">
            <div className="cover-photo" style={divStyle}></div>
            <div className="opacity"></div>
          </div>
          <div className="container">
            <div className="row" id="hero">
              <div className="col">
                <h1>Peep Keep</h1>
                <p className="description">Nothing is worse than forgetting someone's name.  With PeepKeep, you have all your names and faces in one place.</p>
                <Link className="btn btn-red btn-lg " to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default Landing;
