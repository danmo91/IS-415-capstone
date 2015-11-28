import React from 'react';
import TableView from './../components/table-view/table-view'
import './../styles/home.scss'

// must ensure all of your fields have values
let DATA = [
  { id: '1', name: 'Dan Morain'},
  { id: '2', name: 'Robert Morain'},
  { id: '3', name: 'Bri Sorensen'},
  { id: '4', name: 'Morgan Kapman'},
  { id: '5', name: 'Scott Romney'}
]

// define the look of each column, OPTIONAL
let COLUMNS = {
  name: function(data) {
    return (
      <a href="#">{data.name}</a>
    );
  }
}

const Home = React.createClass({

  getInitialState() {
    return {
      people : []
    }
  },

  render: function () {
    return(
      <div className="home">
        <TableView data={DATA} columns={COLUMNS} />
      </div>
    )
  }

});

export default Home;
