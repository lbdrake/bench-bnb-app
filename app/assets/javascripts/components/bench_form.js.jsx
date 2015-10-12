window.BenchForm = React.createClass({
  getInitialState: function(){
    return (
      {lat: "", lon: "", description: "", seating: ""}
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
    ApiUtil.createBench(this.state);
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="lat" >Enter latitude:</label>
        <input type="text" id="lat" value={this.state.lat} onChange={this.updateLat} />
        <label for="lon" >Enter longitude:</label>
        <input type="text" id="long" value={this.state.lon} onChange={this.updateLon} />
        <label for="description" >Enter longitude:</label>
        <input type="text" id="description" value={this.state.description} onChange={this.updateDescription} />
        <select id="seating" onChange={this.updateSeating} >
        <option value="">Select seating</option>
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
