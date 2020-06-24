import {React, styled} from '../Library';
import {Bio, Home, Monstralia, RoguelikeOne, SuitYourself} from '../Pages/Pages'

const pages = [
    Bio,
    Home,
    Monstralia.Page,
    RoguelikeOne,
    SuitYourself,
];

const imgs = [
    'https://drive.google.com/uc?id=1geiV1riN3qDFYC35GbTL-GwaU7_hCsVb',
    'https://drive.google.com/uc?id=15hsdngexVWnj4--NCo8sxP2mNjxUsaHs',
    Monstralia.Icon,
    'https://drive.google.com/uc?id=1OjAS9WPTfNU7MuUmkvynY2OXSxChMUkb',
    'https://drive.google.com/uc?id=1znvxnh14Ck4xeOX7nLkUfk1dtZnSagdb',
];

let containers = [
    {icon: imgs[0], page: pages[0]}, 
    {icon: imgs[1], page: pages[1]},
    {icon: imgs[2], page: pages[2]},
    {icon: imgs[3], page: pages[3]},
    {icon: imgs[4], page: pages[4]},
];

function getImg(i){
    const img = containers[i].icon;
    return(img)
}

function getPage(p){
    return(
        p.page
    )
}

const Page = styled.div`
    display: block;
    /* height: 80vh; */
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
    /* font-size: 12vmin; */
    color: #555;
`
// const map = containers.map(
//     (p, index) => 
//     <Page 
//         data-index={index}
//         key={index}>
//             <Text>
//                 {p.page}
//             </Text>
//     </Page>
// );

function test(e){
    return(e.prototype.isReactComponent ? "TRUE" : "FALSE");
}

const map = containers.map(
    (p, index) =>
    <p.page/> 
    // <Page data-index={index} key={index}>
    //     <Text><p.page/></Text>
    // </Page>
)

export {map, getImg};
