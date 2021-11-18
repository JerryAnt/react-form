import React,  { Component } from 'react';


class InputField extends React.Component {
  render() {
    return <div className="input-field">this is my {this.props.id}</div>
  }
}
export default InputField;
