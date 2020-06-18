import {React, styled} from './Library';
import Monstralia from './Monstralia.png'

const pages = [
    "Bio",
    "Home",
    "Monstralia",
    "RogueLike One",
    "Suit Yourself"
];

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

export {map, getImg};
