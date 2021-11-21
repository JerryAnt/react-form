import React,  { Component } from 'react';


class InputField extends Component {
  render() {
    return (
      <input type="text" className="input-field" placeholder={this.props.id} />
    )
  }
}
export default InputField;

// import React,  { Component } from 'react';
// import FullName from './full_name.jsx';
// import CompanyName from './company_name.jsx';
// import Email from './email.jsx';

// class InputField extends Component {
//   render() {
//     return (
//       < Name />
//       < Company />
//       < Email />
//     )
//   }
// }
// export default InputField;
