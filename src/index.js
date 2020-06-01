import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';

'use strict';

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

let domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(<LikeButton />, domContainer);
ReactDOM.render(<div>Hi</div>, domContainer);