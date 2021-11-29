/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useEffect} from 'react'
import styled from 'styled-components'
import { BiCodeAlt } from "react-icons/bi";
import { medium,small,large } from '../responsive';
import Task from "../assets/assignmentSubmission.png"
import UrlShortnet from "../assets/urlshortner.png"
import videoEditor from "../assets/videoEditor.png"
import spaceInvader from "../assets/spaceInvader.png"
import weather from "../assets/weather.png"
import library from "../assets/library.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 7rem;
margin-bottom: 2rem;
${large({marginTop:"9rem"})}
${medium({marginTop:"12rem"})}
${small({marginTop:"15rem"})}
`
const IconDiv=styled.div`
color: grey;
font-size: 3.5rem;
`
const IconHeader=styled.div`
font-size: 1.3rem;
font-weight: 600;
`
const Container=styled.div`
display: flex;
justify-content: center;
`
const InnerContainer=styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
`

const CardContainer=styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`
const OuterCard=styled.div`
`
const InnerCard=styled.div`
`
const CardDetails=styled.div`
position: absolute;
display: none !important;
top: 0;
left: 0;
background-color: rgba(0,0,0, 0.4);
height: 100%;
width: 100%;
color: white;
text-align: center;
padding: 7px;
gap: 1rem;
`
const Card=styled.div`
width: 29rem;
height: 20rem;
position: relative;
${small({width:"20rem",padding:"5px"})}
&:hover ${CardDetails}{
 display: flex !important;
flex-direction: column;
justify-content: center;
align-items: center;
}
`
const CardImg=styled.img`
width:100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
;
`

const DetailHeader =styled.div`
font-size: 1.3rem;
font-weight: 700;
`
// const DetailSub =styled.div`
// font-weight: 500;
// font-size: 0.9rem;
// `

const DetailBody =styled.div`
font-weight: 500;
`

const DetailFooter =styled.div`
display: flex;
gap: 0.5rem;
`
export default function Projects() {

    useEffect(() => {
        AOS.init({})
    }, [])


    return (
        <div id="projects">
            <HeaderContainer>
                    <IconDiv><BiCodeAlt/></IconDiv>
                    <IconHeader>Apps I've Built</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <CardContainer>
                        <OuterCard >
                            <InnerCard>
                                <Card data-aos="zoom-out" >
                                    <CardImg src={Task}/>
                                    <CardDetails>
                                        <DetailHeader>Student Task Submission Portal</DetailHeader>
                                        <DetailBody>A portal to get and submit the completed task provided between admin and students built using ReactJs , NodeJs and MongoDB.</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://student-task-submission.herokuapp.com/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Taufiq4045/student-task-submission.git">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={UrlShortnet}/>
                                    <CardDetails>
                                        <DetailHeader>URL shortner app</DetailHeader>
                                        <DetailBody>A URL shortner application free by singing up and get details of shortened urls in Line chart built using ReactJs , NodeJs and MongoDB.</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://url-shortner-free.herokuapp.com/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Taufiq4045/url-shortner-app.git">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={videoEditor}/>
                                    <CardDetails>
                                        <DetailHeader>Video Editor </DetailHeader>
                                        <DetailBody>A web application to convert .mp4 to hls .m3u8 using react and NodeJs framework with FFMPEG plugin</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://mp4-hls-converting.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Taufiq4045/Video-Format-Converter---HLS.git">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={spaceInvader}/>
                                    <CardDetails>
                                        <DetailHeader>Space Invader </DetailHeader>
                                        <DetailBody>A Game built entirely using pure Javascript and game mechanism where the enemy ships and hero ships are controlled by manipulating DOM</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://mission-invaders.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Taufiq4045/Mission-Invaders.git">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={weather}/>
                                    <CardDetails>
                                        <DetailHeader>Weather App</DetailHeader>
                                        <DetailBody>A Weather app which reports weather all around the world with customizable search locations</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://weather-report-portal.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Taufiq4045/Weather-App.git">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={library}/>
                                    <CardDetails>
                                        <DetailHeader>Library </DetailHeader>
                                        <DetailBody>A Simple Mern Stack application to handle Crud Operations  for managing details</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://library-crud.netlify.app/">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Taufiq4045/CRUD-task-library.git">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>
                    </CardContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}