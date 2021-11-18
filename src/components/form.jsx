import React,  { Component } from 'react';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx';
import InputField from './input_field.jsx';

class Form extends Component {
  render() {
    return (
      <div>
        <InputField id="name" />
        <InputField id="company" />
        <InputField id="email" />
        <Checkbox />
        <div class="container">
          <Button id="submit" />
          <Button id="reset" />
        </div>
      </div>
    );
  }
}

export default Form;
