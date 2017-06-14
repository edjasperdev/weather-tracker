const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

// var Nav = require('./views/Nav.js');
const Home = require('./views/Home.js');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

module.exports = App;