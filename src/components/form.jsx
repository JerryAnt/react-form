import React,  { Component } from 'react';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx';
import InputField from './input_field.jsx';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // where I should put my events
    };
  }

handleSubmit() {
  // where I should change the state
  // handleSubmit for the submit button

    // when I click on submit button
      // if input field is empty
      // show an error message

      // if email is empty
      // show an error message

      // if company is empty
        // show an error message

      // if email is not valid
      // show an error message

  // else submit button throws to a link

}


handleClear() {
  // where I should change the state
  // handleClear for the reset button

    // when I click on reset button
      // input field is empty   ""
      // email field is empty ""
      // company field is empty ""
      // checkbox: check false

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
