/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 11:21:32
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// components
import App from './app';

// store
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelectorAll('.app')[0]
)