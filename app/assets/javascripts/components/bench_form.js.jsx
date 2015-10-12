window.BenchForm = React.createClass({
  getInitialState: function(){
    return (
      {lat: this.props.location.query.lat || "", lon: this.props.location.query.lon || "", description: "", seating: ""}
    );
  },

  updateLat: function (e){
    this.setState({lat: e.currentTarget.value});
  },

  updateLon: function (e){
    this.setState({lon: e.currentTarget.value});
  },

  updateDescription: function (e){
    this.setState({description: e.currentTarget.value});

  },
  updateSeating: function (e){
    this.setState({seating: e.currentTarget.value});

  },
  handleSubmit: function (e){
    e.preventDefault();
    ApiUtil.createBench({lat: parseFloat(this.state.lat),
                        lon: parseFloat(this.state.lon),
                        description: this.state.description,
                        seating: parseInt(this.state.seating)});
    this.setState({lat: "", lon: "", description: "", seating: ""});
  },

  render: function(){
    this.selected = "";
    if (this.state.seating === "") {
      this.selected = "selected";
    }
    return (
      <form onSubmit={this.handleSubmit} className="benchform">
        <input type="text" id="lat" name="bench[lat]" placeholder="Enter latitude:" value={this.state.lat} onChange={this.updateLat} />
        <input type="text" id="long" value={this.state.lon} placeholder="Enter longitude:" onChange={this.updateLon} />
        <input type="text" id="description" value={this.state.description} placeholder="Enter description:" onChange={this.updateDescription} />
        <select id="seating" onChange={this.updateSeating} >
          <option value="" selected={this.selected}>Select seating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input type="submit" value="Save vortex" />
      </form>
    );
  }
});
