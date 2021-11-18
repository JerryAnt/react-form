import React,  { Component } from 'react';

class Checkbox extends Component {
  render() {
  return(
    <div>
    <input type="checkbox" className="checkbox" />
    <span> I agree to subscribe to the newsletter</span>
    </div>
    );
  }
}

export default Checkbox;
