"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let shopTitle = 'Ishop-456';
let productsArr = require('./products.json');

ReactDOM.render(
  React.createElement(Shop,{title:shopTitle,products:productsArr}),
  document.getElementById('container') 
);
