"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

import './sass/style.scss';
//import './components/shop.css';

let shopTitle = 'Ishop-456';
let productsArr = require('./products.json');

ReactDOM.render(
  React.createElement(Shop,{title:shopTitle,products:productsArr}),
  document.getElementById('container') 
);
