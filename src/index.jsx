import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button.jsx';
import Checkbox from './components/checkbox.jsx';
import InputField from './components/input_field.jsx';
import Form from './components/form.jsx';

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(

    <Form />,
    root);
}
