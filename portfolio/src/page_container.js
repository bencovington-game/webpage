import React from 'react';
import styled from 'styled-components';

const pages = [
    "Bio",
    "Home",
    "Monstralia",
    "RogueLike One",
    "Suit Yourself"
];

const imgs = [
    "https://tinyurl.com/y8xvufmm",
    "https://tinyurl.com/y8xvufmm",
    "https://tinyurl.com/y8xvufmm",
];

const Page = styled.div`
    display: block;
    height: 80vh;
    /* background: silver; */
`;

const Text = styled.div`
    display: flex; 
    height: 100%;
    /* border: solid black; */
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12vmin;
    color: #555;
`

const map = pages.map(
    (p, index) => 
    <Page 
        data-index={index}
        key={index}>
            <Text>
                {p}
            </Text>
    </Page>
);

export default map;
