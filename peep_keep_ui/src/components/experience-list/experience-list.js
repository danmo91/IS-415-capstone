import React from 'react';
import { Link } from 'react-router';
import './experience-list.scss'

const ExperienceList = React.createClass({

  getInitialState () {
    return {
      data: this.props.data
    }
  },

  findObjectById(array, id) {
    let object;
    array.map(function (data) {
      if (data.id == id) {
        object = data;
      }
    });

    return object;
  },

  // hasClass, takes two params: element and classname
  hasClass(el, cls) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
  },

  handleExperienceSelect (e) {
    // save experience_id in localStorage
    // let experience_id = e.target.attributes['data-id'].value;
    // localStorage.experience_id = experience_id;


    // get card, description, id, experience
    let card = e.currentTarget;
    let description = card.lastChild;
    let id = card.getAttribute("data-id");
    let experiences = this.props.data;
    let experience = this.findObjectById(experiences, id);

    let expanded = this.hasClass(card, "expanded");


    if (expanded) {

      // remove line
      card.removeChild(card.childNodes[2]);

      // replace value with short text
      description.innerHTML = this.getShortDescription(experience.description);

      // collapse card
      card.classList.remove("expanded");
      description.classList.add("small");

    } else {

      // add line
      let newItem = document.createElement("hr");
      card.insertBefore(newItem, card.childNodes[2]);

      // replace value with full text
      description.innerHTML = experience.description;

      // expand card
      card.classList.add("expanded");
      description.classList.remove("small");
    }





  },

  getShortDescription (str) {
    return str.substring(0,35) + '...';
  },

  render() {
    return (
      <div className="experience-list">
        <ul>
          {
            this.props.data.map(function (data) {
              return (
                <li className="card" onClick={this.handleExperienceSelect} key={data.id} data-id={data.id}>
                  <div className="title">
                    {data.title}
                  </div>
                  <div className="date small">
                    {data.date}
                  </div>
                  <div className="description small">
                    {this.getShortDescription(data.description)}
                  </div>
                </li>
              )
            }.bind(this))
          }
        </ul>
      </div>
    )
  }

});

export default ExperienceList;
