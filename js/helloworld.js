var _templateObject = _taggedTemplateLiteral(['\n    font-size: 1.5em;\n    text-align: center;\n    color: palevioletred;\n'], ['\n    font-size: 1.5em;\n    text-align: center;\n    color: palevioletred;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { render } from 'react-dom';
'use strict';

var Title = styled.h1(_templateObject);

// const Wrapper = styled.section`
//     padding: 4em;
//     background: papayawhip;
// `;

// function Test(props) {

//     return (
//     <Wrapper>
//         <Title>
//             Hello World!
//         </Title>
//     </Wrapper>
//     );
// }

render(React.createElement(
    'div',
    null,
    'Hello World!'
));

// let domContainer = document.querySelector('#root');
// ReactDOM.render(<Test/>, domContainer);
// ReactDOM.render(<Title>Hello, world!</Title>, domContainer);

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