import styled from 'styled-components';
import { render } from 'react-dom';
'use strict';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

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

render(
    <div>
        Hello World!
    </div>
);

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