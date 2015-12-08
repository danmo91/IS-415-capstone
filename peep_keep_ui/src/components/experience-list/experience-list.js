import React from 'react';
import { Link } from 'react-router';
import './experience-list.scss'

const ExperienceList = React.createClass({

  getInitialState () {
    return {
      data: this.props.data
    }
  },

  handleExperienceSelect (e) {
    // save experience_id in localStorage
    let experience_id = e.target.attributes['data-id'].value;
    localStorage.experience_id = experience_id;
  },

  render() {
    return (
      <div className="experience-list">
        <ul>
          {
            this.props.data.map(function (data) {
              return (
                <Link onClick={this.handleExperienceSelect} to='/experience' key={data.id}>
                  <li data-id={data.id} >
                    <div className="left">
                      {data.title}
                    </div>
                    <div className="right">
                      {data.date}
                    </div>
                  </li>
                </Link>
              )
            }.bind(this))
          }
        </ul>
      </div>
    )
  }

});

export default ExperienceList;
