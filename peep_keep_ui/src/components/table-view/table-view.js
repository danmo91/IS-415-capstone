import React from 'react';
import { Link } from 'react-router';
import './table-view.scss'

let TableView = React.createClass({

  getInitialState () {
    return {
      data: this.props.data
    }
  },

  handlePersonSelect(e) {
    // save id in local storage
    let person_id = e.target.attributes['data-id'].value;
    localStorage.person_id = person_id;

  },

  render () {
    return (
      <div className="react-table-view">
        <ul>
          {
            this.props.data.map(function (data) {
              return (
                <Link onClick={this.handlePersonSelect} to='/detail' key={data.id}>
                  <li data-id={data.id} >{data.fname + ' ' + data.lname}</li>
                </Link>
              )
            }.bind(this))
          }
        </ul>
      </div>
    )

  }


});

export default TableView;
