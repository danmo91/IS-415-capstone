import React from 'react'

import Card from './../components/card/card'
import Signup_Form from './../components/forms/signup_form/signup_form'


let Signup = React.createClass({

  render() {

    return (

      <div className="signup_box container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Card>
              <Signup_Form />
            </Card>
          </div>
        </div>
      </div>

    )

  }

});

export default Signup;
