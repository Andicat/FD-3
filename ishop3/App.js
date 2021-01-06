"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ProductsTable from './components/ProductsTable';

let shopTitle = 'Ishop';
let productsArr = require('./products.json');

ReactDOM.render(
  React.createElement(ProductsTable,{title:shopTitle,products:productsArr}), 
  document.getElementById('container') 
);
