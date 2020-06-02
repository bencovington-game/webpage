'use strict';

// const Carousel_Style = window.styled.div`
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
// `;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 1.5em;\n    font-weight: bold;\n    text-align: center;\n    color: palevioletred;\n    background: silver;\n    '], ['\n    font-size: 1.5em;\n    font-weight: bold;\n    text-align: center;\n    color: palevioletred;\n    background: silver;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Carousel = function Carousel() {
    var Style = window.styled.div(_templateObject);
    return React.createElement(
        Style,
        null,
        React.createElement(Slide, null)
    );
};

ReactDOM.render(React.createElement(Carousel, null), document.getElementById('frame'));

// function Test(){
//     const Style = window.styled.div`
//         color : red;
//         font-weight: bold;
//     `
//     return(
//         <Style>Test!</Style>
//     )
// }

// function BackgroundTest(){
//     const Style = window.styled.div`
//         border-style : solid;
//         background : silver;
//     `
//     return(
//         <Style>
//             <Test/>
//         </Style>
//     )

// }

// function Test(){
//     return <div>Test</div>
// }

// const BackgroundTest = styled(Test)`
//     background: silver;
// `;

// const Test = ({ className, children }) => (
//     <a className={className}>
//         Test!
//         {children}
//     </a>
// );

// function Test({ className, children}){
//     return(
//         <div className={className}>
//             Test!
//             {children}
//         </div> 
//     )
// }

// const StyledTest = styled(Test)`
//     color: palevioletred;
//     font-weight: bold;
// `;

// ReactDOM.render(
//     <StyledTest/>,
//     document.getElementById('frame')
// );