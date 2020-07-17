import {React, styled, PageStyles} from '../Library'
import Icon from '../Images/Monstralia.png';

const Title = "Monstralia";
const Page = () => {
    return(
        <PageStyles.PageStyle>
            <PageStyles.Heading>Monstralia</PageStyles.Heading>
            <PageStyles.SubHeading>About the Game</PageStyles.SubHeading>
            <PageStyles.Paragraph></PageStyles.Paragraph>
            <PageStyles.SubHeading>My Contributions</PageStyles.SubHeading>
            <PageStyles.BulletedList>
                <PageStyles.Bullet></PageStyles.Bullet>
                <PageStyles.Bullet></PageStyles.Bullet>
                <PageStyles.Bullet></PageStyles.Bullet>
            </PageStyles.BulletedList>
        </PageStyles.PageStyle>
    )
}

const Monstralia = {Icon, Page, Title};
export default Monstralia;

