import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import configureStore from './store';

const history = createHistory();
const store = configureStore();

ReactDOM.render((
	<Provider store={store}>
	    <ConnectedRouter history={history}>
	      	<App />
	    </ConnectedRouter>
  	</Provider>),
document.getElementById('root'));
registerServiceWorker();
