import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from "../src/context/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App/>
    </Provider>
);


