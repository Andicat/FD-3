﻿var Product = React.createClass({

  displayName: 'Product',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string,
    price: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    isDeleted: React.PropTypes.bool,
    cbDelete: React.PropTypes.func.isRequired,
  },

  chooseProduct: function(EO) {
    switch (EO.target.type) {
      case 'button':
        this.props.cbDelete(this.props.code);
        break;
      default:
        EO.currentTarget.classList.toggle('Product--selected');
    };
  },

  render: function() {
    return this.props.isDeleted ? null : React.DOM.div({key:this.props.code,className:'Product',onClick:this.chooseProduct},
      React.DOM.img({className:'Product__photo', src: this.props.photo, alt:this.props.photo, width:'60px', height:'60px'}),  
      React.DOM.span({className:'Product__title'},this.props.title),  
      React.DOM.span({className:'Product__price'},this.props.price),
      React.DOM.span({className:'Product__count'},this.props.count),
      React.DOM.button({className:'Product__button',type:'button'},'delete'),
      );},
});