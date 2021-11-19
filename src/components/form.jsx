import React,  { Component } from 'react';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx';
import InputField from './input_field.jsx';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // where is should put my events
    };
  }

handleSubmit() {
  // where I should change the state
  // handleSubmit for the submit button
}



  render() {
    return (
      <form>
        <div>
          <p>name*</p>
          <InputField
          id="name"
          />
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
          <Button type="submit"
          id="submit"

        // create a function handleSubmit
          onClick="handleSubmit"/>
          <Button id="reset"

        // create a function handleclear
          onclick="handleclear"/>
        </div>
      </form>
    );
  }
}

export default Form;
