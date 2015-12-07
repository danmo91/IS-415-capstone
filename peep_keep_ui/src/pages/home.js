import React from 'react';
import TableView from './../components/table-view/table-view'
import './../styles/home.scss'

const Home = React.createClass({

  getInitialState() {
    return {
      user : {},
      people : []
    }
  },

  componentWillMount() {
    // make ajax request for this users people
    $.ajax({
          url: 'http://localhost:3000/api/v1/users/' + localStorage.id,
          type: 'GET',
          dataType: 'json',
          success: (data) => {
            this.setState({user: data.user});
            this.setState({people: this.state.user.people})
          },
          error: (err) => {
            this.history.pushState(null, '/login', '')
          }
        })

  },

  render: function () {
    return(
      <div className="home">
        <div className="hero text-center">
          <h1>{this.state.user.fname + " " + this.state.user.lname}</h1>
          <img src={require("./../images/profile.jpg")} alt="profile-pic"/>
        </div>

        <TableView data={this.state.people} />
      </div>
    )
  }

});

export default Home;
