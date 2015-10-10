window.Index = React.createClass({
  getInitialState: function (){
    return ({
      benches: BenchStore.all()
    });
  },

  updateBenches: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.updateBenches);
    // ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this.updateBenches);
  },

  render: function (){
    return (
      <div>
        <p>We are in the index.js.jsx file</p>
        <div>
          {this.state.benches.map(function(bench) {
              return (
                <li key={bench.lat}>{bench.description}</li>
                );
            })
          }
        </div>
      </div>
    );
  }
});
