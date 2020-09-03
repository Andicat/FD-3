var ProductsTable = React.createClass({

  displayName: 'ProductsTable',

  getDefaultProps: function() {
    return { title: "Какой-то интернет-магазин", products: [] }
  },

  getInitialState: function() {
    return { 
      deletedProducts: [],
      productsToShow:this.props.products.map(function (val) { return val; }),
    };
  },


  deleteProduct: function(code) {
    var isConfirmed = confirm('Удалить ' + this.state.productsToShow[code-1].title + ' из списка товаров?');
    if (isConfirmed) {
      var arr = this.state.deletedProducts;
      arr.push(code);
      this.setState( {deletedProducts:arr} );
    }
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
          isDeleted:this.state.deletedProducts.indexOf(v.code)>=0 ? true : false, cbDelete:this.deleteProduct})
      );
    
    return React.DOM.div( {className:'ProductsTable'}, 
      React.DOM.div( {className:'ShopTitle'}, this.props.title),
      React.DOM.div( {className:'Products'}, productsTableTitleCode, productsCode),
    );
  },

});