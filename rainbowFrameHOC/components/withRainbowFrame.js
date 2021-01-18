/*
1. Разработать обычный React-компонент DoubleButton, который рендерит две кнопки <input type=button> и между ними - текст, 
пришедший в props.children. Компонент получает три пропса - caption1 и caption2 это надписи на кнопках, cbPressed - коллбек, 
при нажатии на первую кнопку коллбек вызывается с аргументом 1, при нажатии на вторую - с аргументом 2.
Разместите компонент на странице, заставьте его работать. Тексты на кнопках и между кнопками могут быть любыми.
Например:
<DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>
2. Разработать HOC withRainbowFrame, который позволяет рендерить оборачиваемый компонент внутри нескольких цветных рамок.
Например:
let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
<FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
*/

import React from 'react';

function withRainbowFrame (colors) {

  function renderBorder (i = 0, Component,props) {
    return (
      <div style={{padding:'5px', border:'solid 5px ' + colors[i]}}>
        {(i<colors.length)?renderBorder(i+1,Component,props):<Component {...props} />}
      </div>
    );
  }

  return function(Component) {
    return props => (
      <div className='doubleButton__frame'>
        {renderBorder(0,Component,props)}
      </div>
    );
  };
}

export { withRainbowFrame };
