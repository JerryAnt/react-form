import React,  { Component } from 'react';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx';
import InputField from './input_field.jsx';
class Form extends Component {

  render() {
    return (
      <div>
        <div><InputField  id="name" /></div>

        <div><InputField  id="company" /></div>

        <div><InputField  id="email" /></div>

        <Checkbox />
        <div class="container">
          <Button id="reset" />
          <Button type="submit" id="submit" />
        </div>
      </div>
    );
  }
}

export default Form;
