'use strict';

// const Carousel_Style = window.styled.div`
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
// `;

const Carousel = () => {
    let Style = window.styled.div`
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    color: palevioletred;
    background: silver;
    `;
    return(<Style><Slide/></Style>);
}

ReactDOM.render(
    <Carousel/>,
    document.getElementById('frame')
);

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