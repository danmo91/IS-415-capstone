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
