import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import App from './App/App';
import * as serviceWorker from './App/serviceWorker';
import SlideView from './Core/SlideView';
import {map, getImg} from './Core/PageContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Design, Programming, Production, Modeling} from './Core/tags'
import {Bio, Home, Monstralia, RoguelikeOne, SuitYourself} from './Pages/Pages';


export{
    React,
    ReactDOM,
    styled,
    Slider,
    App,
    serviceWorker,
    SlideView,
    map, getImg,
    FontAwesomeIcon,
    Design, Programming, Production, Modeling,
    Bio, Home, Monstralia, RoguelikeOne, SuitYourself,
};