import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Map from './page_container';

const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
`;

const Page = styled.div`
    width: 80%;
    height: 80vh;
    background: #419be0;
    text-align: center;
`;

const CustomArrow = styled.div`
    display: "block";
    filter: invert(1);
`;

export default class SlideView extends React.Component {
    render(){
        return (
            <Wrapper>
                <Slider 
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                    arrows={true}
                    nextArrow={<CustomArrow />}
                    prevArrow={<CustomArrow />}
                >
                    <Map/>
                {/* <PageContainer/> */}
                {/* <Page>Page 1</Page>
                <Page>Page 2</Page>
                <Page>Page 3</Page> */}

                </Slider>
            </Wrapper>
        )
    }
}