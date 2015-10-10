window.Map = React.createClass({

  getInitialState: function () {
    return ({
      benches: BenchStore.all()
    });
  },

  updateBenches: function () {
    this.setState({benches: BenchStore.all()});
    this.updateMarkers();
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle', this.fetchingWithinBounds);

    BenchStore.addChangeListener(this.updateBenches);
  },

  fetchingWithinBounds: function() {
    var bounds = this.map.getBounds();
    var formattedBounds = { northEast: {lat: bounds.getNorthEast().J,
                                        lon: bounds.getNorthEast().M},
                            southWest: {lat: bounds.getSouthWest().J,
                                        lon: bounds.getSouthWest().M }};
    ApiUtil.fetchBenches(formattedBounds);
    this.updateBenches();
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this.updateBenches);
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
