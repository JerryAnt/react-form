import React,  { Component } from 'react';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx';
import InputField from './input_field.jsx';

class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <p>name*</p>
          <InputField  id="name" />
        </div>
        <div>
          <p>company*</p>
          <InputField  id="company" />
        </div>
        <div>
          <p>email*</p>
          <InputField  id="email" />
        </div>
        <Checkbox />
        <div class="container">
          <Button type="submit" id="submit" />
          <Button id="reset" />
        </div>
      </div>
    );
  }
}

export default Form;
