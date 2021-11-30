import React from 'react'
import styled from 'styled-components'
import Wave from 'react-wavify'
import TextTransition, { presets } from "react-text-transition";
import { HiDocumentDownload } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";
import Resume from "../assets/Taufiq.pdf"
import {Link as LinkS} from 'react-scroll' 
import { small } from '../responsive';
import Video from '../assets/Video.mp4';


const MainContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 9rem;
${small({gap:"2rem"})}
`
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    color: white;
`

const MainDiv=styled.div`
flex: 1;
`

// const Container=styled.div`
// display: flex;
// padding: 10px;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// margin-top:9rem;
// text-align: center;
// ${small({marginTop:"5rem"})}
// `

const HeaderContainer=styled.div`
color:#0275d8;
font-size: 4rem;
font-weight: 700;
text-align: center;
`
const SContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
`
const TContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
color:#0275d8;
`
const VideoBg = styled.video`
width: 100%;
height: 100vh/* calc(100vh- 70px) */;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`
const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 10px 100px;
    /* padding-top: 25%;  */
    display: flex;
    flex-direction: column;
    align-items: flex-center; /* flex-start */
    @media screen and (max-width:370px){
        padding-top: 25%;
    }
`
const HomeBg = styled.div`
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const HomeContainer = styled.div`
    background:#0c0c0c ;
    display: flex;
    /* justify-content: center; */
    align-items: center; 
    margin-top:5rem;
    padding: 0 30px;
    height: 100vh/* 608px *//* 800px ==================updated */;  
    position: relative;
    z-index: 1;
    :before{
        content:'';
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2)0%,
            rgba(0,0,0,0.6)
        ),
        linear-gradient(180deg,rgba(0,0,0,0.2)0%,transparent 100%);
        z-index: 2;
    }
`

export default function Home() {
    const [index, setIndex] = React.useState(0);
    const TEXTS = [
        "React",
        "NodeJs",
        "MongoDB",
        "Express",
        "AWS"
      ];
     
    React.useEffect(() => {
     
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        1500 
      );
      return () => clearTimeout(intervalId);
      
    }, []);
    return (
        <div id="home">
        <MainContainer>

            <HomeContainer>
              <HomeBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
              </HomeBg>

                <HomeContent >
                    <HeaderContainer> TAUFIQ</HeaderContainer>
                    <SContainer ><p >A passionate full stack developer building apps using</p></SContainer>
                    <TContainer>
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                    </TContainer>
                    <SContainer>
                        <button className="btn btn-success"><a style={{color:"inherit",textDecoration:"none"}} href={Resume} download><HiDocumentDownload style={{fontSize:"1.5rem"}}/>Resume</a></button>
                        <button className="btn btn-secondary mx-2"> <AiFillAppstore style={{fontSize:"1.5rem"}}/>
                        <NavLinks to='projects' spy={true} smooth={true}  duration={500}>Project</NavLinks>
                        </button>
                    </SContainer>
                </HomeContent>
        </HomeContainer >

        <MainDiv  className="d-flex flex-column justify-content-end " >
            <div>
         <Wave  fill='#0275d8'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.50,
          points: 3
        }}
        />
        </div>
        </MainDiv>
        </MainContainer>
        </div>
    )
  }