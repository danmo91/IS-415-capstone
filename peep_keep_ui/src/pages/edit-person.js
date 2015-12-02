import React from 'react';
import { History } from 'react-router'
import Person_Form from './../components/forms/person_form/person_form'

const EditPerson = React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      person: {
        fname: '',
        lname: '',
        background: '',
      }
    }
  },

  render() {
    return (
      <div className="person">
        <div className="text-center">
          <Person_Form />
        </div>

      </div>
    )
  }

});

export default EditPerson;
