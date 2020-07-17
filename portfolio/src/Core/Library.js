import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import App from '../App/App';
import * as serviceWorker from '../App/serviceWorker';
import SlideView from './SlideView';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Bio from './Pages/Bio';
import Home from './Pages/Home';
import Monstralia from './Pages/Monstralia';
import RoguelikeOne from './Pages/RoguelikeOne';
import SuitYourself from './Pages/SuitYourself';
import BioIcon from './Images/RIFT_Icon.png';
import * as PageStyles from './Pages/PageStyles';

export{
    React, ReactDOM, styled, Slider, 
    App, serviceWorker,
    SlideView,
    FontAwesomeIcon,
    Bio, Home, Monstralia, RoguelikeOne, SuitYourself, 
    Pages, PageStyles,
};

const Pages = [Bio, Home, Monstralia, RoguelikeOne, SuitYourself];