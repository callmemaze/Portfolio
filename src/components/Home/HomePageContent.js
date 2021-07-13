import React,{useEffect,useState} from 'react'
import { Container } from '../../styles/GlobalStyles'
import { Content, HomeContent,ContentHeadline } from '../../styles/HomeStyles'
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import {motion} from "framer-motion"
const HomePageContent = () => {
    const [hovered,setHover] = useState(false)
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px'
    })
    useEffect(() => {
        if(inView){
            animation.start("visible")
        }
        
    }, [animation,inView])
    return (
        <HomeContent ref={contentRef} animate={animation} initial="hidden"
            
        >
            <ContentHeadline variants={{
                visible:{
                    opacity:1,
                    x:100,
                    transition:{duration:0.6,ease:[0.6,0.05,-0.01,0.9]},
                },
                hidden:{
                    opacity:0,
                    x:"50%",
                },
            }} onHoverStart={() => setHover(!hovered)}>
                
                 <span className="arrow">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                                                <path
                                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                fill="#FFF"
                                                fillRule="evenodd"
                                                ></path>
                                            </svg>
                            </span>
                            <div className="who">
                            WHO AM I?
                            </div>
            </ContentHeadline>
            <Container >
                <Content variants={{
                visible:{
                    opacity:1,
                    y:0,
                    transition:{duration:0.6,ease:[0.6,0.05,-0.01,0.9]},
                },
                hidden:{
                    opacity:0,
                    y:72,
                },
            }}>
                    Hello, I'm Dipesh Shrestha— <br/>
                    I am an Undergraduate Student currently studing in Islington College
                    where I will majored in Computing, focused on Software Engineering and Machine Learning.
                    I'm passionate about improving the lives of others through coding and 
                    am constantly looking to learn new things everyday.
                    I create project and my work reflects the passion.
                </Content>
            </Container>    
        </HomeContent>
    )
}

export default HomePageContent
