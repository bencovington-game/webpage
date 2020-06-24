import {React, styled, Slider, map, getImg} from '../Library';

export default class SlideView extends React.Component {
    render() {    
        const Div = styled.div.attrs(props => ({}))`
            *, *::before, *::after{
                margin: 0px;
                padding: 0px;
                outline: none;
            }
            --slate: #333;
        `;
        const SlideStyle = styled(Div)`
            display: block;
            position: absolute;            
            height: 80vh;
            width: 80vw;
            padding: 0;
            top: calc(50% - 80vh/2);
            left: calc(50% - 80vw/2);
        `;
        const Icon = styled.img`
            display: inline-block;
            position: relative;
            padding: 0px;
            margin: 0px;
            top: 1vmin;
            height: 8vmin;
            background: white;
            border-radius: 20%;
            box-shadow: 0px 0px 1vmin var(--slate);
            filter: grayscale(1) invert(.3) opacity(.8) brightness(1.5);
            :hover{
                filter: opacity(1);
            };
        `;
        const Dots = styled.ul`
            display: flex;
            position: fixed;
            margin: 0px;
            padding: 0px;
            height: 10vmin;
            width: 100vw;
            top: 2vmin;
            left: 0;
            justify-content: center;
            vertical-align: middle;
            & > li {
                display: inline-block;
                position: relative;
                margin: 1vmin, 0px, 1, 0px;
                height: 10vmin;
                width: 10vmin;
            }
            & > .slick-active > ${Icon}{
                height: 10vmin;
                top: 0vmin;
                filter: opacity(1);
            };
        `;
        const Arrow = styled(Div)`
            position: fixed;
            height: 10%;
            width: 5%;
            top: 50%;
            ::before {
                font-size: 5vmin;
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
        const settings = {
            appendDots: dots => (<Dots>{dots}</Dots>),
            customPaging: i => (<Icon src={getImg(i)}/>),
            dotsClass: "slick-dots",
            dots: true,
            arrows: true,
            prevArrow: <Arrow/>,
            nextArrow: <Arrow/>,
            accessibility: true,
            initialSlide: 1,
            infinite: true,
            speed: 750,
            touchThreshold: 10,
        };
        return (
            <SlideStyle>
                <Slider {...settings}>{map}</Slider>
            </SlideStyle>
        )
    }
}