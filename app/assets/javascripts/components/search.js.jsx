window.Search = React.createClass({

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
