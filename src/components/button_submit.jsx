import React,  { Component } from 'react';
import validEmailRegex from './valid_email_regex.jsx';
import countErrors from './count_errors.jsx';
import validateForm from './validate_form.jsx';
// import InputField from './'
// import InputField from './'
// import InputField from './'

// import Checkbox from './checkbox.jsx'



class Button extends Component {
  render() {

    return (
      <div className="buttons input-field" id={this.props.id}>{this.props.id}</div>
    );
  }
}






// class ButtonSubmit extends Component {
//   render() {

//     return (

//     <button id="submit1" type="submit"  className="submit" ><Button id="submit"/></ button>
//     {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'}
//     );
//   }
// };

export default ButtonSubmit;
