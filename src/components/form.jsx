import React,  { Component } from 'react';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx';
import InputField from './input_field.jsx';

class Form extends Component {
  render() {
    return (
      <div>
        <InputField />
        <Checkbox />
        <Button />
      </div>
    );
  }
}

export default Form;
