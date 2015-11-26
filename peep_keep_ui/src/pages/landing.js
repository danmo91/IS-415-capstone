import React from 'react';
import {RouteHandler, Link} from 'react-router';
import './../styles/landing.scss'

const Landing = React.createClass({

  render: function () {
    return(
      <div className="landing">
        <div className="container">
          <div className="row" id="hero">
            <div className="col">
              <h1>Peep Keep</h1>
              <p className="description">Nothing is worse than forgetting someone's name.  With PeepKeep, you have all your names and faces in one place.</p>
              <Link className="btn btn-primary btn-lg" to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default Landing;
