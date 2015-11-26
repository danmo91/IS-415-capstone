import React from 'react';

let Signup_Form = React.createClass({


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

  render: function () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 register-account">
            <h1 className="text-center">Signup</h1>
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
                <button type="submit" name="submit" className="btn btn-primary">Create Account</button>
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
