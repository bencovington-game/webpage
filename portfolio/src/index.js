import{React, ReactDOM, App, serviceWorker, SlideView, styled, Pages} from './Core/Library';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestPage = Pages[0].Page;

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SlideView/>
    {/* <TestPage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
