import React from 'react';

let TableView = React.createClass({

  getInitialState () {
    return {
      data: this.props.data
    }
  },

  render () {

    return (
      <div className="react-table-view">
        <table>
          <tbody>
            {

              this.props.data.map(function (data) {
                return (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                  </tr>
                )

              })

            }
          </tbody>
          
        </table>
      </div>
    )

  }


});

export default TableView;
