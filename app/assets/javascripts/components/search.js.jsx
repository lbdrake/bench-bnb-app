window.Search = React.createClass({
  getInitialState: function () {
    return ({ bounds: "", min: "", max: ""})
  },

  componentDidMount: function () {
    FilterStore.addFilterChangeListener(this.updateSearchState);
  },

  updateSearchState: function () {
    var params = FilterStore.all();
    this.setState({ min: params.min, max: params.max, bounds: params.bounds });
    ApiUtil.fetchBenches(bounds) //need to update to params
  },

  handleMapClick: function(coords) {
    this.props.history.pushState(null, "benches/new", coords);
  },

  render: function(){
    return (
      <div>
        <Map handleMapClick={this.handleMapClick} />
        <Index />
      </div>
    );
  }
});
