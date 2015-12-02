import React from 'react';

const Detail = React.createClass({

  getInitialState() {
    return {
      person: {}
    }
  },

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/api/v1/person/' + localStorage.person_id,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({person: data.person}, () => {console.log(this.state)});
      },
      error: (err) => {
        this.history.pushState(null, '/login', '')
      }
    })
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
