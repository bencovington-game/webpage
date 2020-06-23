import{React, styled} from '../Library'
export {Design, Programming, Production, Modeling};

const tag = styled.span`
    padding: 0rem .5rem;
    color: white;
    font-weight: bold;
    border-radius: .5rem;
`
const Design = () => {
    const Tag = styled(tag)`
        background: green;
    `
    return <Tag>DESIGN</Tag>;
}
const Programming = () => {
    const Tag = styled(tag)`
        background: blue;
    `
    return <Tag>PROGRAMMING</Tag>;
}
const Production = () => {
    const Tag = styled(tag)`
        background: gold;
    `
    return <Tag>PRODUCTION</Tag>;
}
const Modeling = () => {
    const Tag = styled(tag)`
        background: red;
    `
    return <Tag>MODELING</Tag>;
}