import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Routing (React Router Dom)
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

