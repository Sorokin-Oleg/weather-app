import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reduser from './reduser/reduser';
import './main.scss';

const store = createStore(reduser);
  
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);