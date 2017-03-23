require('normalize.css/normalize.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BlocksContainer from './containers/BlocksContainer';
import BlockContainer from './containers/BlockContainer';
import StatusContainer from './containers/StatusContainer';
import IndexContainer from './containers/IndexContainer';
import App from './containers/App';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import configureStore from './stores/store';

injectTapEventPlugin();

const store = configureStore();

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexContainer}/>
          <Route path="/home" component={IndexContainer} />
          <Route path="/blocks" component={BlocksContainer} />
          <Route path="/status" component={StatusContainer} />
          <Route path="/block(/:hash)" component={BlockContainer} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app'));
