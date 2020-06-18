import {React, styled, Slider, map, getImg} from './Library';

export default class SlideView extends React.Component {
    render() {    
        const Div = styled.div.attrs(props => ({}))`
            *, *::before, *::after{
                margin: 0px;
                padding: 0px;
                outline: none;
            }
            --slate: #333;
        `
        const SlideStyle = styled(Div)`
            top: calc(50% - 80vh/2);
            left: calc(50% - 80vw/2);
            position: absolute;
            /* background: salmon; */
            display: block;
            height: 80vh;
            width: 80vw;
            padding: 0;
        `;
        const Slide = styled(Div)``
        const Arrow = styled(Div)`
            position: fixed;
            height: 10%;
            width: 5%;
            top: 50%;
            ::before {
                font-size: 12vmin;
                line-height: 15%;
                position: fixed;
                color: silver;
                top: 50%;
            };
            &.slick-prev {
                left: 1vmin;
                ::before {
                    left: 0;
                }
            };
            &.slick-next {
                right: 1vmin;
                ::before {
                    right: 0;
                }
            };
            :hover::before {
                opacity: 1;
            };
        `;
        const Icon = styled.img`
            display: inline-block;
            background: white;
            padding: 0px;
            margin: 0px;
            position: relative;
            /* left: -.85vw; */
            /* width: 80%; */
            top: 1vmin;
            height: 8vmin;
            border-radius: 20%;
            box-shadow: 0px 0px 1vmin var(--slate);
            filter: grayscale(1) invert(.3) opacity(.8) brightness(1.5);
            :hover{
                /* width: 2.5vw; */
                /* transform: translate(-50%, -50%); */
                /* filter: grayscale(0) invert(0); */
                filter: opacity(1);
            };
            /* border: solid black; */
        `
        const Dots = styled.ul`
            margin: 0px;
            padding: 0px;
            position: fixed;
            left: 0;
            top: 2vmin;
            width: 100vw;
            height: 10vmin;
            /* top: 50%; */
            /* left: calc(50% - 25%/2); */
            /* background: red; */
            display: flex;
            justify-content: center;
            vertical-align: middle;
            /* transform: translate(-50%, -50%); */
            & > li {
                /* background: yellow; */
                height: 10vmin;
                width: 10vmin;
                margin: 1vmin, 0px, 1, 0px;
                /* top: 12.5%; */
                position: relative;
                display: inline-block;
                /* display: inline-block; */
                /* vertical-align: middle;   */
            }
            & > .slick-active{
                /* top: 3.5%; */
            }
            & > .slick-active > ${Icon}{
                /* left: -1.1vw; */
                /* width: 100%; */
                height: 10vmin;
                top: 0vmin;
                filter: opacity(1);
            };
        `
        const settings = {
            appendDots: dots => (
                <Dots>{dots}</Dots>
            ),
            customPaging: i => (
                <Icon src={getImg(i)}/>
            ),
            accessibility: true,
            slide: <Slide/>,
            speed: 750,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 10,
            focusOnSelect: true,
            centerPadding: '0px',
            centerMode: true,
            initialSlide: 1,
            infinite: true,
            dots: true,
            dotsClass: "slick-dots",
            arrows: true,
            prevArrow: <Arrow/>,
            nextArrow: <Arrow/>,
        }
        return (
            <SlideStyle>
                <Slider {...settings}>{map}</Slider>
            </SlideStyle>
        )
    }
}