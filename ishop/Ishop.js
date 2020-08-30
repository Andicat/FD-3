var ProductsTable = React.createClass({

  displayName: 'ProductsTable',

  getDefaultProps: function() {
    return { title: "Какой-то интернет-магазин" }
  },

  render: function() {

    var productsCode=[];

    var productsTableTitleCode=   
      React.DOM.div({key:'title',className:'ProductsTitle'},
        React.DOM.span({className:'Title'},'Product'),  
        React.DOM.span({className:'Price'},'Price'),
        React.DOM.span({className:'Photo'},'Photo'),
        React.DOM.span({className:'Count'},'Count'),
      );
    productsCode.push(productsTableTitleCode);
    
    this.props.products.forEach(element => {
      var productCode=        
        React.DOM.div({key:element.code,className:'Product'},
          React.DOM.span({className:'Title'},element.title),  
          React.DOM.span({className:'Price'},element.price),
          React.DOM.a({className:'Photo', href: element.photo},element.photo),
          React.DOM.span({className:'Count'},element.count),
        );
      productsCode.push(productCode);
    });

    return React.DOM.div( {className:'ProductsTable'}, 
      React.DOM.div( {className:'ShopTitle'}, this.props.title ),
      React.DOM.div( {className:'Products'}, productsCode ),
    );
  },

});