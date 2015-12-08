import React from 'react';
import ExperienceList from './../components/experience-list/experience-list'
import { History } from 'react-router'



const Detail = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      person: {},
      experiences: []
    }
  },

  componentWillMount() {
    console.log('component will mount');
    $.ajax({
      url: 'http://localhost:3000/api/v1/person/' + localStorage.person_id,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({person: data.person, experiences: data.person.experiences});
      },
      error: (err) => {
        this.history.pushState(null, '/login', '')
      }
    });

  },

  render() {
    return (
      <div className="detail text-center">
        <h1>{this.state.person.fname + ' ' + this.state.person.lname}</h1>
        <p>{this.state.person.background}</p>
        <ExperienceList data={this.state.experiences} />
      </div>
    )
  }

});

export default Detail;
