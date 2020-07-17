import {React, styled, PageStyles} from '../Library'
import Icon from '../Images/SU_Icon.png'

const Title = "Suit Yourself";
const Page = () => {
    return(
        <PageStyles.PageStyle>
            <PageStyles.Heading>Suit Yourself</PageStyles.Heading>
            <PageStyles.SubHeading>About the Game</PageStyles.SubHeading>
            <PageStyles.Paragraph>
                Suit Yourself is a fast-paced playing card game. In this game players’ strategies challenge each other and can topple down as quickly as a house of cards. Inspired by the classic card game WAR but designed for multiple players with a focus on strategy and diplomacy.
            </PageStyles.Paragraph>
            <PageStyles.SubHeading>My Contributions</PageStyles.SubHeading>
            <PageStyles.BulletedList>
                <PageStyles.Bullet>Designed analog game limited to playing cards</PageStyles.Bullet>
                <PageStyles.Bullet>Developed compelling resources and mechanics</PageStyles.Bullet>
                <PageStyles.Bullet>Balanced gameplay based on playtest results</PageStyles.Bullet>
            </PageStyles.BulletedList>
        </PageStyles.PageStyle>
    )
}

const SuitYourself = {Icon, Page, Title};
export default SuitYourself;