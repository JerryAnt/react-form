import React,  { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">Left</div>
        <div className="right-scene">Right</div>
      </div>
    );
  }
}


// const Button = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };
export default Button;
