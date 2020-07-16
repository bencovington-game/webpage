import {React, styled, PageStyle, Heading, Paragraph, Tag} from '../Library'
import Icon from '../Images/Home_Icon.png';

const Title = "Home";
const Page = () => {
    return(
        <PageStyle>
            <Heading>BENJAMIN COVINGTON GAME DEVELOPER</Heading>
            <Paragraph>
                My name is Benjmain Covington. I'm a creative developer with more than 6 years working on games with experience in {' '} <Tag type="design"/>, {' '} <Tag type="programming"/>, {' '} <Tag type="production"/>, and {' '} <Tag type="modeling"/>. The combination of engaging mechanics, display of skill, and the way all branches of development collaborate together are what makes me passionate about games. I find that the more limitations there are, the more compelling and creative the solutions become. Because of this no matter what game I am working on and what skills I must use I am always excited to tackle development problems head on.
            </Paragraph>
            <Links/>
        </PageStyle>
    )
}

const Links = () => {
    const Style = styled.div`
        height: 1vh;
        /* background: salmon; */
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Link = styled.a`
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
    return(
        <Style>
            <Link href="https://www.linkedin.com/in/benjamin-covington/">in</Link>
            <Link href="mailto:bencovington.game@gmail.com">✉</Link>
            <Link href="tel:5403837338">☏</Link>
        </Style>
    )
}

const Home = {Title, Page, Icon}
export default Home;