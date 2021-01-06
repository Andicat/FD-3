var ProductsTable = React.createClass({

  displayName: 'ProductsTable',

  getDefaultProps: function() {
    return { title: "Какой-то интернет-магазин", products: [] }
  },

  getInitialState: function() {
    return { 
      selectedProduct: -1,
      productsToShow:this.props.products.map(v => v),
    };
  },


  deleteProduct: function(code, title) {
    var isConfirmed = confirm('Удалить ' + title + ' из списка товаров?');
    if (isConfirmed) {
      var arr = this.state.productsToShow.filter(v => v.code!==code);
      this.setState( {productsToShow:arr} );
    }
  },

  selectProduct: function(code) {
    this.setState( {selectedProduct:code} );
  },

  render: function() {

    var productsCode=[];

    var productsTableTitleCode=   
      React.DOM.div({className:'ProductsTitle'},
        React.DOM.span({className:'TitleName'},'Product'),  
        React.DOM.span({className:'TitlePrice'},'Price'),
        React.DOM.span({className:'TitleCount'},'Count'),
      );

    var productsCode=this.state.productsToShow.map( v =>
       React.createElement(Product, {
          key:v.code, photo:v.photo, title:v.title, 
          code:v.code, price:v.price, count:v.count,
          cbDelete:this.deleteProduct, 
          isSelected:v.code===this.state.selectedProduct? true:false, cbSelect:this.selectProduct,})
      );
    
    return React.DOM.div( {className:'ProductsTable'}, 
      React.DOM.div( {className:'ShopTitle'}, this.props.title),
      React.DOM.div( {className:'Products'}, productsTableTitleCode, productsCode),
    );
  },

});