import React,  { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="buttons input-field" id={this.props.id}>{this.props.id}</div>
    );
  }
}

export default Button;
