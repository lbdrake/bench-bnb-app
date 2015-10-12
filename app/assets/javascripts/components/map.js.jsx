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
    this.map.addListener('click', this.goToNewBenchForm);
    BenchStore.addChangeListener(this.updateBenches);
  },

  goToNewBenchForm: function (e){
    // debugger;
    var clickedLat = e.latLng.J;
    var clickedLon = e.latLng.M;
    this.props.handleMapClick({lat: clickedLat, lon: clickedLon});
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
    var markers = markers || [];
    this.reset_markers(markers);

    this.state.benches.forEach (function(bench) {
      var myLatLng = { lat: bench.lat, lng: bench.lon };
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: bench.description
      });

      marker.setMap(this.map);
      markers.push(marker);
    }.bind(this));
    },

  reset_markers: function (markers) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  },

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});
