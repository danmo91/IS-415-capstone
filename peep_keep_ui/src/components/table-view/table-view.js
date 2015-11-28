import React from 'react';
import './table-view.scss'

let TableView = React.createClass({

  getInitialState () {
    return {
      data: this.props.data
    }
  },

  render () {

    return (
      <div className="react-table-view">
        <ul>
          {
            this.props.data.map(function (data) {
              return (
                <a href="#" key={data.person.id}>
                  <li>{data.person.fname + ' ' + data.person.lname}</li>
                </a>
              )
            })
          }
        </ul>
      </div>
    )

  }


});

export default TableView;
