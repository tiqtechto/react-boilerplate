import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/index.css';
import './css/custom.scss';
import App from './App';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ToastContainer className='position-fixed top-0 end-0 m-1 m-md-2' />
        <App />
    </React.StrictMode>
);


