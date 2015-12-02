import React from 'react';
import { History } from 'react-router'

let Experience_Form = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      error: false,
      person_id: '',
      title: '',
      date: '',
      description: ''
    }
  },

  componentDidMount() {
    let experience_id = localStorage.experience_id;
    if (experience_id != 'null') {
      $.ajax({
        url: 'http://localhost:3000/api/v1/experience/' + localStorage.experience_id,
        type: 'GET',
        dataType: 'json',
        success: (data) => {
          this.setState({title: data.experience.title});
          this.setState({date: data.experience.date});
          this.setState({description: data.experience.description});
        },
        error: (err) => {
          this.history.pushState(null, '/login', '')
        }
      })
    }
  },

  submitForm(e) {
    e.preventDefault();

    let _data = {
      experience: {
        title: this.state.title,
        date: this.state.date,
        description: this.state.description,
        person_id: localStorage.person_id
      }
    }

    let experience_id = localStorage.experience_id;

    if (experience_id == 'null') {
      $.ajax({
        url: 'http://localhost:3000/api/v1/experience/',
        method: 'POST',
        dataType: 'json',
        data: _data,
        success: (data) => {
          this.setState({
            person_id: data.experience.id,
            title: data.experience.title,
            date: data.experience.date,
            description: data.experience.description
          });
          localStorage.experience_id = this.state.person_id;
          this.history.pushState(null, '/experience', '');
        }.bind(this),
        error: (error) => {
          console.log('error creating experience');
        }
      });
    } else {
      $.ajax({
        url: 'http://localhost:3000/api/v1/experience/' + localStorage.experience_id,
        method: 'PATCH',
        dataType: 'json',
        data: _data,
        success: (data) => {
          this.setState({
            id: data.experience.id,
            title: data.experience.title,
            date: data.experience.date,
            description: data.experience.description
          });
          this.history.pushState(null, '/experience', '');
        }.bind(this),
        error: (error) => {
          console.log('error updating experience');
        }
      });
    }


  },

  handleTitleChange(e) {this.setState({title: e.target.value})},
  handleDateChange(e) {this.setState({date: e.target.value})},
  handleDescriptionChange(e) {this.setState({description: e.target.value})},

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 register-account">
            <p>{this.state.error}</p>
            <form className="signup_form" onSubmit={this.submitForm}>
              <div className="form-group col-md-6">
                <label>Title</label>
                <input className="form-control" placeholder="Title" type="text" onChange={this.handleTitleChange} value={this.state.title} />
              </div>
              <div className="form-group col-md-6">
                <label>Date</label>
                <input className="form-control" placeholder="Date" type="text" onChange={this.handleDateChange} value={this.state.date} />
              </div>
              <div className="form-group col-md-12">
                <label>Description</label>
                <textarea className="form-control" rows="6" placeholder="Description" onChange={this.handleDescriptionChange} value={this.state.description}></textarea>
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

export default Experience_Form;
