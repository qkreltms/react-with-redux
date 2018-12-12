import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //react와 store 연결
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
