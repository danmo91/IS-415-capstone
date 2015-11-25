import React from 'react';
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
              <a className="btn btn-primary btn-lg" >Sign up</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default Landing;
