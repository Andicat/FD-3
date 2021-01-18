"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton';
import {withRainbowFrame} from './components/withRainbowFrame';
import './components/DoubleButton.scss';

let colors = ['#A52A2A','#FF8C00','#DAA520','#228B22','#4682B4','#4169E1','#483D8B'];
let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
let pressButton = (nmb) => {alert("Pressed " + nmb)};

ReactDOM.render(
  <React.Fragment>
    <DoubleButton caption1 = 'button 1' caption2 = 'button 2' cbPressed = {pressButton}>
      Hello!
    </DoubleButton>
    <FramedDoubleButton caption1 = 'button 1' caption2 = 'button 2' cbPressed = {pressButton}>
      Hello!
    </FramedDoubleButton>
  </React.Fragment>
  , document.getElementById('container') 
);

