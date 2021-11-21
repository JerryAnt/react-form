import React,  { Component } from 'react';

class Button extends Component {
  render() {

    return (
      <div className="buttons input-field" id={this.props.id}>{this.props.id}</div>
    );
  }
}

export default Button;


// import React,  { Component } from 'react';
// import ButtonSubmit from './button_submit.jsx';
// // import ButtonReset from './button_reset.jsx';
// class Buttons extends Component {
//   render() {
//     return (
//       <div class="container">
//         <ButtonSubmit />
//         {/*<ButtonReset />*/}
//       </div>
//     );
//   }
// };

// export default Buttons;
