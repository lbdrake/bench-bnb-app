window.Map = React.createClass({

  getInitialState: function () {
    return ({
      benches: BenchStore.all()
    });
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    BenchStore.addChangeListener(this.updateBenches);
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this.updateBenches);
  },

  updateBenches: function () {
    this.setState({benches: BenchStore.all()});
    this.updateMarkers();
  },

  updateMarkers: function () {
    this.state.benches.forEach (function(bench) {
      var myLatLng = { lat: bench.lat, lng: bench.lon };
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: bench.description
      });

      marker.setMap(this.map);
    }.bind(this));

    },

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});
