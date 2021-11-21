import React,  { Component } from 'react';

class FullName extends Component {
  render() {
    return (
      <div className='fullName'>
        <label htmlFor="fullName">Full Name</label>
        <Input id="name" type='text' name='fullName' onChange={this.handleChange} noValidate />
      </div>
    )
  }
};

export default FullName;
