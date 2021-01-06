var Filter = React.createClass({

  displayName: 'filter',

  getDefaultProps: function() {
    return { options: [] }
  },

  getInitialState: function() {
    return { optionsToShow:this.props.options.map(function (val) { return val; }),
             isSorting:false,
             textFilter:'', }
  },

  filterOptions: function() {
    console.log('sort' + this.state.textFilter);
    var filteredArr = this.props.options.map(function (val) { return val; });
    var text = this.state.textFilter;
    filteredArr = text ? filteredArr.filter(function(val) { return val.text.toLowerCase().indexOf(text.toLowerCase()) > -1; }) : filteredArr;
    filteredArr = this.state.isSorting ? filteredArr.sort(function(a,b) { return a.text>b.text? 1:a.text<b.text?-1:0; }) : filteredArr;
    this.setState( {optionsToShow:filteredArr} );
  },

  setFilter: function(EO) {
    switch (EO.target.type) {
      case 'text':
        this.setState( {textFilter:EO.target.value}, this.filterOptions );
        break;
      case 'checkbox':
        this.setState( {isSorting:EO.target.checked}, this.filterOptions );
        break;
      default:
    }
  },

  resetOptions: function(EO) {
    this.setState( {textFilter:''} );
    this.setState( {isSorting:false} );
    var filteredArr = this.props.options.map(function (val) { return val; });
    this.setState( {optionsToShow:filteredArr} );
  },

  render: function() {

    var filterPanel=   
      React.DOM.div({className:'Filter__panel'},
        React.DOM.input({className:'Filter__sort',type:'checkbox',checked:this.state.isSorting,onClick:this.setFilter}),  
        React.DOM.input({className:'Filter__search',type:'text',value:this.state.textFilter,onChange:this.setFilter}),
        React.DOM.button({className:'Filter__button',onClick:this.resetOptions},'сброс'),
      );

      var optionsCode=[];

      this.state.optionsToShow.forEach(element => {
        var optionCode=        
          React.DOM.option({key:element.code,className:'Filter__option'},element.text);
        optionsCode.push(optionCode);
      });
  
    var filterResult=
      React.DOM.select({className:'Filter__select',size:'5'},optionsCode);

    return React.DOM.div( {className:'Filter'},filterPanel,filterResult);
  },

 

});

var t = function(a,b) {return a + b};

console.log(t.prototype);