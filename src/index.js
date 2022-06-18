import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';    //provide access of store to all files as App is wraped inside

import App from './App';
import 'antd/dist/antd.css';
import store from './app/store';


ReactDOM.render(
    <Router>                                      
        <Provider store={store} >               
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
