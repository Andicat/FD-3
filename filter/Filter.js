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

  filterOptions: function(EO) {
    var textFilter;
    var isSorting;
    switch (EO.target.type) {
      case 'text':
        textFilter = EO.target.value;
        isSorting = this.state.isSorting;
        this.setState( {textFilter:textFilter} );
        break;
      case 'checkbox':
        isSorting = EO.target.checked;
        textFilter = this.state.textFilter;
        this.setState( {isSorting:isSorting} );
        break;
      default:
    }

    var filteredArr = isSorting ? this.props.options.map(function (val) { return val; }).sort(function(a,b) { return a.text>b.text? 1:a.text<b.text?-1:0; }) : this.props.options.map(function (val) { return val; });
    filteredArr = filteredArr.filter(function(val) { return val.text.toLowerCase().indexOf(textFilter.toLowerCase()) > -1; });
    this.setState( {optionsToShow:filteredArr} );
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
        React.DOM.input({className:'Filter__sort',type:'checkbox',checked:this.state.isSorting,onClick:this.filterOptions}),  
        React.DOM.input({className:'Filter__search',type:'text',value:this.state.textFilter,onChange:this.filterOptions}),
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