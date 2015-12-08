import React from 'react';
import Auth from './../../../services/auth.js';
import { History } from 'react-router'

let Signup_Form = React.createClass({
  mixins: [ History ],

  getInitialState: function () {
    return {
      error: false,
      fname: '',
      lname: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },

  submitForm: function(e) {
    e.preventDefault();

    // build data object form form data
    var _data = {
      user : {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      }
    }

    $.ajax({
      url: 'http://localhost:3000/api/v1/users',
      data: _data,
      dataType: 'json',
      method: 'POST',
      success: function (data) {
        Auth.login(_data.user.email, _data.user.password, function () {
          this.history.pushState(null, '/home', '');
        }.bind(this));
      }.bind(this),
      error: function (error) {
        var errorResponse = JSON.parse(error.responseText);
        this.setState(errorResponse);
      }.bind(this)
    });
  },

  handleFirstNameChange: function (e) {this.setState({fname: e.target.value})},
  handleLastNameChange: function (e) {this.setState({lname: e.target.value})},
  handleEmailChange: function (e) {this.setState({email: e.target.value})},
  handlePasswordChange: function (e) {this.setState({password: e.target.value})},
  handlePasswordConfirmationChange: function (e) {this.setState({password_confirmation: e.target.value})},

  render: function () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 register-account">
            <h1 className="text-center">Sign up</h1>
            <p>{this.state.error}</p>
            <form className="signup_form" onSubmit={this.submitForm}>
              <div className="form-group col-md-6">
                <input className="form-control" placeholder="First Name" type="text" onChange={this.handleFirstNameChange} value={this.state.fname} />
              </div>
              <div className="form-group col-md-6">
                <input className="form-control" placeholder="Last Name" type="text" onChange={this.handleLastNameChange} value={this.state.lname} />
              </div>
              <div className="form-group col-md-12">
                <input className="form-control" type="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} />
              </div>
              <div className="form-group col-md-12">
                <input className="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
              </div>
              <div className="form-group col-md-12">
                <input className="form-control" type="password" placeholder="Confirm Password" onChange={this.handlePasswordConfirmationChange} value={this.state.password_confirmation} />
              </div>
              <div className="col-md-4">
                <button type="submit" name="submit" className="btn btn-red">Sign up</button>
              </div>
              <div className="col-md-8">
                <p className="small">By submitting this form, you agree to our Terms and Conditions.</p>
              </div>
            </form>
          </div>
        </div>
    </div>
    )
  }

});

export default Signup_Form;
