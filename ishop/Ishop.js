var ProductsTable = React.createClass({

  displayName: 'ProductsTable',

  getDefaultProps: function() {
    return { title: "Какой-то интернет-магазин", products: [] }
  },

  render: function() {

    var productsCode=[];

    var productsTableTitleCode=   
      React.DOM.div({className:'ProductsTitle'},
        React.DOM.span({className:'TitleName'},'Product'),  
        React.DOM.span({className:'TitlePrice'},'Price'),
        React.DOM.span({className:'TitleCount'},'Count'),
      );
    
    this.props.products.forEach(element => {
      var productCode=        
        React.DOM.div({key:element.code,className:'Product'},
          React.DOM.img({className:'Photo', src: element.photo, alt:element.photo, width:'60px', height:'60px'}),  
          React.DOM.span({className:'Title'},element.title),  
          React.DOM.span({className:'Price'},element.price),
          React.DOM.span({className:'Count'},element.count),
        );
      productsCode.push(productCode);
    });

    return React.DOM.div( {className:'ProductsTable'}, 
      React.DOM.div( {className:'ShopTitle'}, this.props.title),
      React.DOM.div( {className:'Products'}, productsTableTitleCode, productsCode),
    );
  },

});