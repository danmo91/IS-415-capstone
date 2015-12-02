import React from 'react';
import { History } from 'react-router'

const Experience = React.createClass({
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
          <h1>{this.state.experience.title}</h1>
          <p className="small">{this.state.experience.date}</p>
        </div>
        
        <p>{this.state.experience.description}</p>
      </div>
    )
  }

});

export default Experience;
