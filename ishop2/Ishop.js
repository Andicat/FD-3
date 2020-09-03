var ProductsTable = React.createClass({

  displayName: 'ProductsTable',

  getDefaultProps: function() {
    return { title: "Какой-то интернет-магазин", products: [] }
  },

  getInitialState: function() {
    return { 
      selectedProduct: -1,
      productsToShow:this.props.products.map(function (val) { return val; }),
    };
  },


  deleteProduct: function(code) {
    var isConfirmed = confirm('Удалить ' + this.state.productsToShow[code-1].title + ' из списка товаров?');
    if (isConfirmed) {
      console.log('delete ' + code);
      var arr = this.state.productsToShow.splice(code, 1);
      console.log(arr);
      //this.setState( {productsToShow:this.state.productsToShow.splice(code, 1)} );
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