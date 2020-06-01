var _templateObject = _taggedTemplateLiteral(['\n    font-size: 1.5em;\n    text-align: center;\n    color: palevioletred;\n'], ['\n    font-size: 1.5em;\n    text-align: center;\n    color: palevioletred;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 4em;\n    background: papayawhip;\n'], ['\n    padding: 4em;\n    background: papayawhip;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
'use strict';

var Title = styled.h1(_templateObject);

var Wrapper = styled.section(_templateObject2);

function Test(props) {

    return React.createElement(
        Wrapper,
        null,
        React.createElement(
            Title,
            null,
            'Hello World!'
        )
    );
}

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Test, null), domContainer);

// ReactDOM.render(
//     <Test/>, document.getElementById('root')
// );
//document.getElementById('head');
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return (
//       <button onClick={() => this.setState({ liked: true }) }>
//         Like
//       </button>
//     );
//   }
// }

// let domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(<LikeButton />, domContainer);