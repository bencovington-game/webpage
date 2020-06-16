import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import map from './page_container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const imgs = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png',
];

function getImg(i){
    const img = imgs[i];
    return(img)
}

export default class SlideView extends React.Component {
    render() {    
        const Style = styled.div`
            /* margin: 5vh 5vw 5vh 5vw; */
            top: 5%;
            left: 5%;
            position: absolute;
            background: salmon;
            display: block;
            height: 90vh;
            width: 90vw;
            padding: 0;
        `;
        const Slide = styled.div``
        const Arrow = styled.div`
            height: 5%;
            width: 2%;
            top: 50%;
        `;
        const PrevArrow = styled(Arrow)`
            text-align: left;
            position: fixed;
            left: 0;
            ::before{
                font-size: 12vmin;
                line-height: 0px;
                color: black;
                content: "‹";            
            }
        `        
        const NextArrow = styled(Arrow)`
            text-align: right;
            position: fixed;
            right: 0;
            ::before{
                font-size: 12vmin;
                line-height: 0px;
                color: black;
                content: '›';
            }
        `

        const Icon = styled.img`
            display: inline-block;
            background: green;
            padding: 0px;
            margin: 0px;
            position: relative;
            left: -.85vw;
            width: 2.5vw;
            border-radius: 20%;
            filter: grayscale(1);
            :hover{
                width: 2.5vw;
                filter: grayscale(0);
            };
            /* border: solid black; */
        `

        const Dots = styled.div`
            /* display: grid; */
            margin: 0px;
            /* background: red; */
            position: absolute;

        `
        const Dot = styled.ul`
            margin: 0px;
            padding: 0px;
            position: fixed;
            width: 10%;
            height: 4%;
            top: .5%;
            left: 45%;
            background: red;
            display: flex;
            justify-content: space-around;
            & > .slick-active > ${Icon}{
                width: 2.5vw;
                filter: grayscale(0);
            };
        `
        
        const settings = {
            appendDots: dots => (
                <Dots>
                    <Dot>{dots}</Dot>
                </Dots>
            ),
            customPaging: i => (
                <Icon src={getImg(i)} />
            ),
            accessibility: true,
            slide: <Slide/>,
            speed: 250,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 10,
            focusOnSelect: true,
            easing: 'ease',
            centerPadding: '0px',
            centerMode: true,
            // swipeToSlide: true,
            initialSlide: 1,
            infinite: true,
            dots: true,
            dotsClass: "slick-dots",
            arrows: true,
            prevArrow: <PrevArrow/>,
            nextArrow: <NextArrow/>,
        }
        return (
            <Style>
                <Slider {...settings}>{map}</Slider>
            </Style>
        )
    }
}