import React from 'react';
import {Link} from 'react-router';
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
                <Link to={'/detail/'+data.person.id} key={data.person.id}>
                  <li>{data.person.fname + ' ' + data.person.lname}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    )

  }


});

export default TableView;
