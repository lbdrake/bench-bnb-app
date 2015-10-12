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
      <div className="benchlist">
          <ul>
            {this.state.benches.map(function(bench) {
                return (
                  <li className="benchlistitem" key={bench.id}>{bench.description}</li>
                  );
              })
            }
          </ul>
      </div>
    );
  }
});
