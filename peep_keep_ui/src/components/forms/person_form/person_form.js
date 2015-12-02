import React from 'react';
import { History } from 'react-router'

let Person_Form = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      error: false,
      person_id: '',
      fname: '',
      lname: '',
      background: ''
    }
  },

  componentDidMount() {
    let person_id = localStorage.person_id;
    if (person_id != 'null') {
      $.ajax({
        url: 'http://localhost:3000/api/v1/person/' + person_id,
        type: 'GET',
        dataType: 'json',
        success: (data) => {
          this.setState({fname: data.person.fname});
          this.setState({lname: data.person.lname});
          this.setState({background: data.person.background});
        },
        error: (err) => {
          this.history.pushState(null, '/login', '')
        }
      })
    }
  },

  submitForm(e) {
    e.preventDefault();

    // collect the form data
    let _data = {
      person: {
        user_id: localStorage.id,
        fname: this.state.fname,
        lname: this.state.lname,
        background: this.state.background
      }
    }

    let person_id = localStorage.person_id;

    if (person_id == 'null') {
      // create new user
      $.ajax({
        url: 'http://localhost:3000/api/v1/person/',
        method: 'POST',
        dataType: 'json',
        data: _data,
        success: (data) => {
          this.setState({
            person_id: data.person.id,
            fname: data.person.fname,
            lname: data.person.lname,
            background: data.person.background
          });
          localStorage.person_id = this.state.id;
          this.history.pushState(null, '/home', '');
        }.bind(this),
        error: (error) => {
          console.log('error creating person');
        }
      });
    } else {
      $.ajax({
        url: 'http://localhost:3000/api/v1/person/' + localStorage.person_id,
        method: 'PATCH',
        dataType: 'json',
        data: _data,
        success: (data) => {
          this.setState({
            fname: data.person.fname,
            lname: data.person.lname,
            background: data.person.background
          });
          this.history.pushState(null, '/detail', '');
        }.bind(this),
        error: (error) => {
          console.log('error updating person');
        }
      });
    }


  },

  handleFirstNameChange(e) {this.setState({fname: e.target.value})},
  handleLastNameChange(e) {this.setState({lname: e.target.value})},
  handleBackgroundChange(e) {this.setState({background: e.target.value})},

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 register-account">
            <p>{this.state.error}</p>
            <form className="signup_form" onSubmit={this.submitForm}>
              <div className="form-group col-md-6">
                <label>First Name</label>
                <input className="form-control" placeholder="First Name" type="text" onChange={this.handleFirstNameChange} value={this.state.fname} />
              </div>
              <div className="form-group col-md-6">
                <label>Last Name</label>
                <input className="form-control" placeholder="Last Name" type="text" onChange={this.handleLastNameChange} value={this.state.lname} />
              </div>
              <div className="form-group col-md-12">
                <label>Background</label>
                <textarea className="form-control" rows="6" placeholder="Background" onChange={this.handleBackgroundChange} value={this.state.background}></textarea>
              </div>
              <div className="col-md-12">
                <button type="submit" name="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

});

export default Person_Form;
