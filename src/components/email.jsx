import React, { Component } from 'react';


class Email extends Component {
  render() {
    return (
      <div className='email'>
        <label htmlFor="email">Email</label>
        <input id="email" type='email' name='email' onChange={this.handleChange} noValidate />
        {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
      </div>
    );
  }
}

export default Email;
