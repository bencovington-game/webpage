import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import map from './page_container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Monstralia from './Monstralia.png'

const imgs = [
    'https://drive.google.com/uc?id=1geiV1riN3qDFYC35GbTL-GwaU7_hCsVb',
    'https://drive.google.com/uc?id=15hsdngexVWnj4--NCo8sxP2mNjxUsaHs',
    Monstralia,
    'https://drive.google.com/uc?id=1OjAS9WPTfNU7MuUmkvynY2OXSxChMUkb',
    'https://drive.google.com/uc?id=1znvxnh14Ck4xeOX7nLkUfk1dtZnSagdb',
];

function getImg(i){
    const img = imgs[i];
    return(img)
}

export default class SlideView extends React.Component {
    render() {    
        const Div = styled.div`
            --slate: #333;
            *:focus{
                outline: none;
            }
        `
        const SlideStyle = styled(Div)`
            /* margin: 5vh 5vw 5vh 5vw; */
            top: 10%;
            left: 10%;
            position: absolute;
            background: silver;
            display: block;
            height: 80vh;
            width: 80vw;
            padding: 0;
            border-radius: 2.5vmin;
            box-shadow: 0px 0px 5vmin var(--slate);
        `;
        const Slide = styled(Div)``
        const Arrow = styled(Div)`
            position: relative;
            height: 5%;
            width: 2%;
            top: 50%;
        `;
        const PrevArrow = styled(Arrow)`
            text-align: left;
            position: fixed;
            left: 1%;
            top: 50%;
            ::before{
                font-size: 12vmin;
                line-height: 0px;
                color: var(--slate);
                content: "‹";           
            };
            :hover::before{
                color: white;
                background: var(--slate);
            }
        `        
        const NextArrow = styled(Arrow)`
            text-align: right;
            position: fixed;
            right: 1%;
            ::before{
                font-size: 12vmin;
                line-height: 0px;
                color: var(--slate);
                content: '›';
            }
        `

        const Icon = styled.img`
            display: inline-block;
            background: white;
            padding: 0px;
            margin: 0px;
            position: relative;
            left: -.85vw;
            width: 2.5vw;
            border-radius: 20%;
            box-shadow: 0px 0px 1vmin var(--slate);
            filter: grayscale(1) invert(.2);
            :hover{
                width: 2.5vw;
                filter: grayscale(0) invert(0);
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
            width: 15%;
            height: 4%;
            top: 2%;
            left: 42.5%;
            /* background: red; */
            display: flex;
            justify-content: space-around;
            & > .slick-active > ${Icon}{
                left: -1.1vw;
                width: 3vw;
                filter: grayscale(0) invert(0);
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
            <SlideStyle>
                <Slider {...settings}>{map}</Slider>
            </SlideStyle>
        )
    }
}