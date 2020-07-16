import {React, styled, PageStyle, Heading, Paragraph, Image} from '../Library'
import Icon from '../Images/RIFT_Icon.png'

const Title = "About Me";

const Page = () => {
    return(
        <PageStyle>
            <Heading>About Me</Heading>
            <Image img = "BioIcon" size="200px"/>
            <Paragraph>
                Benjamin Covington attended George Mason studying game design and psychology. As a junior he helped start and grow local Indie studios such as Hyperfocus Games which produced games such as RogueLike One. Benjamin was also a member of GMU’s Game Analysis and Design Interest Group (GADIG) and in his senior year became the president of the student organization. 
            </Paragraph>
            <Paragraph>
                Before coming to GMU, Benjamin attended Blue Ridge Community College studying computer science. During this time he also worked as a senior CAD modeler and designer in a local jewelry store named A Different Facet Jewelers. Also while in Harrisonburg Benjamin placed second at the state level in SkillsUSA for 3D Visualization and Animation.
            </Paragraph>
            <Heading> Download: {' '}
                <a href="https://drive.google.com/open?id=1oqAOxVcYKwyaZI_BT1fOp-NG5Ajpe2hnNz344QrnF_Y">
                    Resume
                </a>
            </Heading>
        </PageStyle>
    )
}

const Bio = {Icon, Page, Title}
export default Bio;