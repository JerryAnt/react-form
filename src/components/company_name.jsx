import React,  { Component } from 'react';


class CompanyName extends Component {
  render() {
    return (
            <div className='companyName'>
              <label htmlFor="companyName">Company Name</label>
              <input id="company" type='text' name='companyName' onChange={this.handleChange} noValidate />
              {errors.companyName.length > 0 &&
                <span className='error'>{errors.companyName}</span>}
            </div>

export default CompanyName;
