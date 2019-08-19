import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Routing (React Router Dom)
import {BrowserRouter} from 'react-router-dom';

// importing redux tools
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

