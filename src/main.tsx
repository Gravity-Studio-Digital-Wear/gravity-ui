import 'reflect-metadata';
import './polyfills'

import './index.css'
import './fonts/stylesheet.css'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import "swiper/css/mousewheel";

import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App";


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
