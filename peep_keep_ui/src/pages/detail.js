import React from 'react';

let DATA = {
  person: {
    id: '2',
    fname: 'Robert',
    lname: 'Morain',
    background: 'Funniest person on earth',
    experiences: [
      {
        title: 'The Good Dinosaur',
        date: '11-28-2015',
        description: 'What did you learn?'
      },
      {
        title: 'Two Jacks Pizza',
        date: '11-28-2015',
        description: 'This is our favorite pizza place.  It is the best!'
      },
    ]
  }
}

const Detail = React.createClass({

  getInitialState() {
    return {
      person: DATA.person
    }
  },

  render() {
    console.log('state => ', this.state)
    return (
      <div className="detail text-center">
        <h1>{this.state.person.fname + ' ' + this.state.person.lname}</h1>
        <p>{this.state.person.background}</p>


      </div>
    )
  }

});

export default Detail;
