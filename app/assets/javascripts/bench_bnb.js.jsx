$(function () {
  var root = document.getElementById("content");
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div className="main group">
          <header>
            <h1>VortexBnB</h1>
            <h3>Find Your Spiral Energy Hotspot</h3>

          </header>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
      <Route path="benches/new" component={BenchForm} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
