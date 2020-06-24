import {React, styled, Design, Programming, Production, Modeling} from '../Library'

export default class Home extends React.Component{
    render(){
        const PageStyle = styled.div`
            margin: 0;
            padding: 0;
            text-align: center;
            display: grid; 
            height: 80vh;
            border: solid black;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            /* font-size: 12vmin; */
            color: #555;
        `
        const H1 = styled.h1``
        const P1 = styled(p1)``
        return(
            <PageStyle>
                <H1>BENJAMIN COVINGTON GAME DEVELOPER</H1>
                <P1/>
                <Links/>
            </PageStyle>
        )
    }
}



function p1(){
    const Style = styled.p`
        width: 80%;
        margin: auto;
    `
    return(
        <Style>My name is Benjmain Covington. 
            I'm a creative developer with more than 6 years working on games with experience in 
            {' '} <Design/>, {' '} <Programming/>, {' '} <Production/>, and {' '} <Modeling/>. 
            The combination of engaging mechanics, display of skill, and the way all branches 
            of development collaborate together are what makes me passionate about games. 
            I find that the more limitations there are, the more compelling and creative the solutions become. 
            Because of this no matter what game I am working on and what skills 
            I must use I am always excited to tackle development problems head on.
        </Style>
    )
}

function Links(){
    const Style = styled.div`
        height: 1vh;
        background: salmon;
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