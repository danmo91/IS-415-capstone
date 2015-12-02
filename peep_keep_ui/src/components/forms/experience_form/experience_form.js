import React from 'react';

let Experience_Form = React.createClass({

  getInitialState() {
    return {
      error: false,
      title: '',
      date: '',
      description: ''
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
            <h1 className="text-center">Edit Experience</h1>
            <p>{this.state.error}</p>
            <form className="signup_form" onSubmit={this.submitForm}>
              <div className="form-group col-md-6">
                <input className="form-control" placeholder="Title" type="text" onChange={this.handleTitleChange} value={this.state.title} />
              </div>
              <div className="form-group col-md-6">
                <input className="form-control" placeholder="Date" type="text" onChange={this.handleDateChange} value={this.state.date} />
              </div>
              <div className="form-group col-md-12">
                <input className="form-control" type="text" placeholder="Description" onChange={this.handleDescriptionChange} value={this.state.description} />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

});

export default Experience_Form;
