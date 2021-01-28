"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Company from './components/Company';

import './sass/style.scss';

let companyName = 'Velcom';
let clientsArr = require('./clients.json');

ReactDOM.render(
  React.createElement(Company,{name:companyName,clients:clientsArr}),
  document.getElementById('container') 
);
