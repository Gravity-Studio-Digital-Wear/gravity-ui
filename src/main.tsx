import 'reflect-metadata';
import './polyfills'

import './index.css'
import './fonts/stylesheet.css'

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App";


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
