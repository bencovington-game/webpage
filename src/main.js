'use strict';

// const Carousel_Style = window.styled.div`
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
// `;

// function Carousel(){
//     return(<Carousel_Style>Test!</Carousel_Style>);
// }


function Test(){
    const Style = window.styled.div`
        color : red
    `
    return(
        <Style>Test!</Style>
    )
}

function BackgroundTest(){
    const Style = window.styled.div`
        background : black
    `
    return(
        <Style>
            <Test/>
        </Style>
    )

}

ReactDOM.render(
    <BackgroundTest/>,
    document.getElementById('frame')
);