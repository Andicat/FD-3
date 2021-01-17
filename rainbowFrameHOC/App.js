"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrameHOC from './components/RainbowFrameHOC';
import './components/RainbowFrameHOC.css';

let colors = ['#A52A2A','#FF8C00','#DAA520','#228B22','#4682B4','#4169E1','#483D8B'];

ReactDOM.render(
  <RainbowFrameHOC colors={colors}>
    Hello!
  </RainbowFrameHOC>
  , document.getElementById('container') 
);

