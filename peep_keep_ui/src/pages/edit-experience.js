import React from 'react';
import { History } from 'react-router'
import Experience_Form from './../components/forms/experience_form/experience_form'

const EditExperience = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      experience: {
        title: '',
        date: '',
        description: '',
      }
    }
  },

  componentDidMount () {
    // make ajax call to get experience data
    $.ajax({
      url: 'http://localhost:3000/api/v1/experience/' + localStorage.experience_id,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({experience: data.experience}, () => {console.log(this.state)});
      },
      error: (err) => {
        this.history.pushState(null, '/login', '')
      }
    })
  },

  render() {
    return (
      <div className="experienece">
        <div className="text-center">
          <Experience_Form />
        </div>

      </div>
    )
  }

});

export default EditExperience;
