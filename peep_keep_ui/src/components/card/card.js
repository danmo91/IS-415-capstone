import './card.scss';
import React from 'react';

const Card = React.createClass({
  render : function () {
    return (

          <div className="card">
            {this.props.children}
          </div>
    )
  }
})

export default Card;
