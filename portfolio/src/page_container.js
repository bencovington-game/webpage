import React from 'react';
import styled from 'styled-components';

const pages = [
    "Page 1",
    "Page 2",
    "Page 3"
];

const imgs = [
    "https://tinyurl.com/y8xvufmm",
    "https://tinyurl.com/y8xvufmm",
    "https://tinyurl.com/y8xvufmm",
];

const Page = styled.div`
    display: block;
    height: 90vh;
    background: #419be0;

`;

const Text = styled.div`
    display: flex; 
    height: 100%;
    border: solid black;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12vmin;
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
