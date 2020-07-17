import{React, styled} from '../Library'
import Bio from '../Images/RIFT_Icon.png'

const PageStyle = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
    display: grid; 
    height: 80vh;
    /* border: solid black; */
    justify-content: center;
    align-items: center;
    font-weight: bold;
    /* font-size: 12vmin; */
    color: #555;
`
const Heading = styled.h1``
const SubHeading = styled.h3``
const Paragraph = styled.p`
    width: 80%;
    margin: auto;
`
const BulletedList = styled.ul``
const Bullet = styled.li``
const images = {
    "BioIcon" : Bio,
}
const ImageStyle = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
`
const Image = props => {
    const Width = props.size ?? props.width;
    const Height = props.size ?? props.height;
    return(<ImageStyle 
        src = {images[props.img]} 
        width = {Width ?? "100px"}
        height = {Height ?? "100px"}
    />)
};
const ContactList = styled.div`
    height: 1vh;
    /* background: salmon; */
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContactLink = styled.a`
    text-decoration: none;
    margin: .5vh;
    background: #555;
    width: 5vh;
    height: 5vh;
    color: white;
    border-radius: 100%;
    font-size: 2.5vh;
    justify-content: center;
    display: flex;
    align-items: center;
`
const Link = styled.a`` 
const StyleTag = styled.span`
    background: ${props => props.background};
    padding: 0rem .5rem;
    border-radius: .5rem;
    color: white;
    font-weight: bold;

`
const tags = {
    "design":{content: "DESIGN", background: "green"},
    "programming":{content: "PROGRAMMING", background: "blue"},
    "production":{content: "PRODUCTION", background: "gold"},
    "modeling":{content: "MODELING", background: "red"},
    "default":{content: "TAG", background: "grey"},
};
const Tag = (props) => {
    const tag = (tags[props.type] || tags['default']);
    return(
        <StyleTag background={tag.background}> 
            {tag.content}
        </StyleTag>
    )
};

export {
    PageStyle,
    Heading,
    SubHeading, 
    Paragraph,
    BulletedList,
    Bullet, 
    Image, 
    Tag,
    ContactList,
    ContactLink,
    Link,
};