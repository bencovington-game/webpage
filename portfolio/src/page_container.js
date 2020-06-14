import React from 'react';
import styled from 'styled-components';


const pages = ["page 1", "page 2", "page 3"];


const Page = styled.div`
    width: 80%;
    height: 80vh;
    background: #419be0;
    text-align: center;
`;

export const Map = pages.map(p => <Page>{p}</Page>);


export default class PageContainer extends React.Component {
    render() {
        return (
            <div>
                {Map}
            </div>
        );
    }
    // render(){
    //     // return () =>
    //     //     // pages.forEach(p => <Page>{p}</Page>);
    //     //     pages.map(p => <Page>{p}</Page>);
    //     return (map)
    // }
}