import React from 'react'

import Card from './../components/card/card'
import Input from './../components/form_elements/floating_label_input/floating_label_input'

let Login = React.createClass({

  getInitialState() {

    return {
      error: null,
      email: '',
      password: ''
    }

  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Card>
              <div className="row">
                <div className="col-xs-12">
                  <h1 className="text-center">Login</h1>
                  <p className="text-center">{this.state.error}</p>
                  <form>
                    <div className="form-group col-xs-12">
                      <Input
                        label="Email"
                        placeholder="Email" />
                    </div>
                    <div className="form-group col-xs-12">
                      <Input
                        label="Password"
                        placeholder="Password"
                        type="password" />
                    </div>
                    <div className="form-group col-xs-12">
                      <input type="submit" className="btn btn-lure" value="Login" />
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

});

export default Login;
