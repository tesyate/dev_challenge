import React from 'react';
import store, { history } from 'store/config';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'ui/style/index.scss';

const App = () => (
  <div className="app-wrp">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={Router} />
      </ConnectedRouter>
    </Provider>
  </div>
);
export default App;
