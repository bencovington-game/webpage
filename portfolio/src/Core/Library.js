import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import App from '../App/App';
import * as serviceWorker from '../App/serviceWorker';
import SlideView from './SlideView';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PageStyle, Heading, Paragraph, Image, Tag} from './Pages/PageStyles'
import Bio from './Pages/Bio';
import Home from './Pages/Home';
import Monstralia from './Pages/Monstralia';
import RoguelikeOne from './Pages/RoguelikeOne';
import SuitYourself from './Pages/SuitYourself';
import BioIcon from './Images/RIFT_Icon.png';


export{
    React, ReactDOM, styled, Slider, 
    App, serviceWorker,
    SlideView,
    FontAwesomeIcon,
    PageStyle, Heading, Paragraph, Image, Images, Tag, Pages,
    Bio, Home, Monstralia, RoguelikeOne, SuitYourself,
};

const Pages = [Bio, Home, Monstralia, RoguelikeOne, SuitYourself];
const Images = {BioIcon};