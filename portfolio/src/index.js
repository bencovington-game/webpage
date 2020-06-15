import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SlideView from './SlideView';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import background from './background.svg';

function Background(){
  const Style = styled.img`
    /* width: 100%; */
    filter: opacity(10%);
    background-repeat: repeat;
  `
  return(
    <Style src={background}/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Background/>
    <SlideView/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
