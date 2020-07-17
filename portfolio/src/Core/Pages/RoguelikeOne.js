import {React, styled, PageStyles} from '../Library';
import Icon from '../Images/RLO_Icon.png';

const Title = "Roguelike One"
const Page = () => {
    return(
        <PageStyles.PageStyle>
            <PageStyles.Heading>RoguelikeOne</PageStyles.Heading>
            <PageStyles.SubHeading>About the Game</PageStyles.SubHeading>
            <PageStyles.Paragraph>
                Roguelike One is a procedurally generated miniature-planet based roguelike. Take control of the INTREPID PILOT as they fight their way through the 32nd Galaxy Gladiatorial to discover the secret at the center of the galaxy.
            </PageStyles.Paragraph>
            <PageStyles.SubHeading>My Contributions</PageStyles.SubHeading>
            <PageStyles.BulletedList>
                <PageStyles.Bullet>Designed game world and plot</PageStyles.Bullet>
                <PageStyles.Bullet>Created player and enemy ship models</PageStyles.Bullet>
                <PageStyles.Bullet>Balanced gameplay based on playtest results</PageStyles.Bullet>
            </PageStyles.BulletedList>
        </PageStyles.PageStyle>
    )
}

const RoguelikeOne = {Icon, Page, Title};
export default RoguelikeOne;