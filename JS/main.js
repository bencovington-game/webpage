'use strict';

// const Carousel_Style = window.styled.div`
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
// `;

// function Carousel(){
//     return(<Carousel_Style>Test!</Carousel_Style>);
// }


var _templateObject = _taggedTemplateLiteral(['\n        color : red\n    '], ['\n        color : red\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        background : black\n    '], ['\n        background : black\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Test() {
    var Style = window.styled.div(_templateObject);
    return React.createElement(
        Style,
        null,
        'Test!'
    );
}

function BackgroundTest() {
    var Style = window.styled.div(_templateObject2);
    return React.createElement(
        Style,
        null,
        React.createElement(Test, null)
    );
}

ReactDOM.render(React.createElement(BackgroundTest, null), document.getElementById('frame'));