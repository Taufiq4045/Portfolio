import React from 'react'
import styled from 'styled-components'
import { AiFillGithub,AiFillLinkedin,AiFillTwitterSquare } from "react-icons/ai";

const Container=styled.div`
background-color: lightgrey;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: rgba(26,32,44,255);
font-size: 1.3rem;
font-weight: 700;
gap: 0.5rem;
`
const FooterBottom=styled.div`
display: flex;
gap: 1rem;
font-size: 1.7rem;
`
export default function Footer() {
    return (
        <div id="footer">
            <Container>
                <div>Taufiq</div>
                <FooterBottom>
                <div ><a style={{color:"inherit",textDecoration:"none"}} href="https://github.com/Taufiq4045" target="_blank" rel="noreferrer"><AiFillGithub/></a></div>
                <div ><a style={{color:"inherit",textDecoration:"none"}} href="https://www.linkedin.com/in/taufiq-b1929213a" target="_blank" rel="noreferrer"><AiFillLinkedin/></a></div>
                <div ><a style={{color:"inherit",textDecoration:"none"}} href="https://twitter.com/TaufiqMohd5" target="_blank" rel="noreferrer"><AiFillTwitterSquare/></a></div>
                </FooterBottom>
            </Container>
        </div>
    )
}