import React,  { Component } from 'react';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx';
import InputField from './input_field.jsx';
import validEmailRegex from './valid_email_regex.jsx';
import countErrors from './count_errors.jsx';
import validateForm from './validate_form.jsx';


class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // where I should put my events
      formValid: false,
      errorCount: null,
      errors: {
      fullName: '',
      companyName: '',
      email: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
        case 'companyName':
        errors.companyName =
          value.length < 5
            ? 'Company Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
    }

    this.setState({errors, [name]: value});
  }
  // where I should change the state
  // handleSubmit for the submit button

    // when I click on submit button
      // if input field is empty
      // show an error message
      // error message "Please provide your name"

      // if email is empty
      // show an error message
      // "Please provide an email"

      // if company is empty
        // show an error message
        // "Please provide your company name"

      // if email is not valid
      // show an error message
      // "Please provide a valid email"

      // if checkbox is not checked
      // show an error message
      // Please check the box

  // else
    // submit button throws to a link
    // show a success message
    // You have successfully subscribed to the newsletter




// handleClear() {
  // where I should change the state
  // handleClear for the reset button

    // when I click on reset button
      // input field is empty   ""
      // email field is empty ""
      // company field is empty ""
      // checkbox: check false




// }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
  }

render() {
    const { errors, formValid } = this.state;
    return (
          <form onSubmit={ this.handleSubmit } noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input id="name" type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 &&
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='companyName'>
              <label htmlFor="companyName">Company Name</label>
              <input id="company" type='text' name='companyName' onChange={this.handleChange} noValidate />
              {errors.companyName.length > 0 &&
                <span className='error'>{errors.companyName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input id="email" type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
            </div>
            <Checkbox />
            <div>
              <button id="submit1" type="submit"  className="submit" ><Button id="submit"/></ button>
            {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'}
            </div>
             <div>
              <button type="reset" id="reset" className="reset" />
            </div>
          </form>
    );
  }
}

export default Form;


// render() {
//     const {errors, formValid} = this.state;
//     return (

//           <form onSubmit={this.handleSubmit} noValidate>

//             <InputField />
//             <Checkbox />
//             <Buttons />

//              <div>
//               <button type="reset" id="reset" className="reset" />
//             </div>

//           </form>
//     );
//   }
// }

// export default Form;

