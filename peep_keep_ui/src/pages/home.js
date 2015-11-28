import React from 'react';
import TableView from './../components/table-view/table-view'

// must ensure all of your fields have values

let DATA = [
  {
    person: {
      id: '1',
      fname: 'Scott',
      lname: 'Romney',
      background: 'Springville, UT, Lure, front-end master',
      experiences: [
        {
          title: 'Lure',
          date: '11-28-2015',
          description: 'Scott invented the most brilliant idea in the entire world..'
        },
        {
          title: 'IN-N-OUT',
          date: '11-28-2015',
          description: 'Scott and i have a 6th sense for knowing when the other person is at IN-N-OUT Burger'
        },
      ]
    }
  },
  {
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
]

const Home = React.createClass({

  getInitialState() {
    return {
      people : []
    }
  },

  render: function () {
    return(
      <div className="home">
        <TableView data={DATA} />
      </div>
    )
  }

});

export default Home;
