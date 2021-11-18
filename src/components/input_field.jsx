import React,  { Component } from 'react';


class InputField extends Component {
  render() {
    return (
      <input type="text" className="input-field" placeholder={this.props.id} />
    )
  }
}
export default InputField;
