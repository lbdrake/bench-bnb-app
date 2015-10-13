window.FilterForm = React.createClass({
  getInitialState: function () {
    return ({ min: "", max: "", bounds: "" });
  },

  componentDidMount: function (){
    FilterStore.addFilterChangeListener(this.updateParamsState);
  },

  componentWillUnmount: function (){
    FilterStore.removeFilterChangeListener(this.updateParamsState);
  },

  updateParamsState: function (){
    var params = FilterStore.all();
    this.setState({ min: params.min, max: params.max, bounds: params.bounds });
  },

  updateMin: function (e){
    var min = parseInt(e.targetEvent.value);
    FilterActions.receiveFilterSeatingMin(min);
  },

  updateMax: function (e){
    var max = parseInt(e.targetEvent.value);
    FilterActions.receiveFilterSeatingMax(max);
  },

  render: function(){
    return (
      <form>
        <input type="text"
               value={this.state.min}
               placeholder="Min # of Seats"
               onChange={this.updateMin} />
        <input type="text"
               value={this.state.max}
               placeholder="Max # of Seats"
               onChange={this.updateMax}/>
      </form>
    );
  }
});
