import {React, styled, PageStyles} from '../Library'
import Icon from '../Images/Home_Icon.png';

const Title = "Home";
const Page = () => {
    return(
        <PageStyles.PageStyle>
            <PageStyles.Heading>BENJAMIN COVINGTON GAME DEVELOPER</PageStyles.Heading>
            <PageStyles.Paragraph>
                My name is Benjmain Covington. I'm a creative developer with more than 6 years working on games with experience in {' '} <PageStyles.Tag type="design"/>, {' '} <PageStyles.Tag type="programming"/>, {' '} <PageStyles.Tag type="production"/>, and {' '} <PageStyles.Tag type="modeling"/>. The combination of engaging mechanics, display of skill, and the way all branches of development collaborate together are what makes me passionate about games. I find that the more limitations there are, the more compelling and creative the solutions become. Because of this no matter what game I am working on and what skills I must use I am always excited to tackle development problems head on.
            </PageStyles.Paragraph>
            {/* <Links/> */}
            <PageStyles.ContactList>
                <PageStyles.ContactLink href="https://www.linkedin.com/in/benjamin-covington/">in</PageStyles.ContactLink>
                <PageStyles.ContactLink href="mailto:bencovington.game@gmail.com">✉</PageStyles.ContactLink>
                <PageStyles.ContactLink href="tel:5403837338">☏</PageStyles.ContactLink>
            </PageStyles.ContactList>
        </PageStyles.PageStyle>
    )
}

const Home = {Title, Page, Icon}
export default Home;