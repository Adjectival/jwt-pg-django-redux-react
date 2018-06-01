import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render((
	<Provider store={store}>
	    <ConnectedRouter history={history}>
	      	<Switch>
		        <Route exact path="/login/" component={Login} />
		        <PrivateRoute path="/" component={App}/>
      		</Switch>
	    </ConnectedRouter>
  	</Provider>),
document.getElementById('root'));
registerServiceWorker();
