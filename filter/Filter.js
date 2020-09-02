var Filter = React.createClass({

  displayName: 'filter',

  getDefaultProps: function() {
    return { options: [] }
  },

  getInitialState: function() {
    return { optionsToShow:this.props.options }
  },

  sortOptions: function(EO) {
    var isSorted = EO.target.checked;
    //console.log(this.props.options);
    var optionsUpdated = this.state.optionsToShow;
    optionsUpdated.sort(function(a,b) {
      return a.text>b.text? 1:a.text<b.text?-1:0;
    });
    console.log(this.props.options);
    console.log(optionsUpdated);
    //this.setState({optionsToShow:optionsUpdated});
  },

  render: function() {

    var filterPanel=   
      React.DOM.div({className:'Filter__panel'},
        React.DOM.input({className:'Filter__sort',type:'checkbox',onClick:this.sortOptions}),  
        React.DOM.input({className:'Filter__search',type:'text'}),
        React.DOM.button({className:'Filter__button'},'сброс'),
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