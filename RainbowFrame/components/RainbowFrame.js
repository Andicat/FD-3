import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  //1 вариант: рамка в виде box-shadow: блок один
  render() {
    let colorBg = 'white';
    let boxShadowStr = '';
    let marginStr = (this.props.colors.length-1)*10+5 + 'px';
    this.props.colors.forEach( (c,i) => boxShadowStr += '0 0 0 ' + (10*i+5) + 'px ' + c + (i<this.props.colors.length-1?', 0 0 0 ' + (10*i+10) + 'px ' + colorBg + ', ':''));
    return (
      <div className='rainbowFrame' style={{boxShadow:boxShadowStr,margin: marginStr}}>
        {this.props.children}
      </div>
    );
  }

  renderBorder = (i = 0, ) => {
    return <div style={{padding:'5px', border:'solid 5px ' + this.props.colors[i]}}>
      {(i<this.props.colors.length)?this.renderBorder(i+1):this.props.children}
    </div>
  }

  //2 вариант: рамка в виде border: много вложенных блоков
  render() {
    return (
      <div className='rainbowFrame'>
        {this.renderBorder()}
      </div>
    );
  }
}

export default RainbowFrame;
