import React from 'react';
import "./styles/index.scss"
import App from './App';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './i18n';

// const container = ReactDom.createRoot();

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);