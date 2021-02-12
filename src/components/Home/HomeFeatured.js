import { Link,BrowserRouter as Router } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import {motion} from "framer-motion"
import { Container, Flex } from '../../styles/GlobalStyles'
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import {HomeFeaturedSection,FeaturedProject,FeaturedContent,FeaturedVideo,ContainerFluid,CusFlex } from '../../styles/HomeStyles'
import introVideo from '../../assets/video/docket.mp4'
const HomeFeatured = ({onCursor,setToggle,
    toggleMenu,}) => {
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
        <Router>
        <HomeFeaturedSection ref={contentRef} animate={animation} initial="hidden"
        variants={{
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
            <ContainerFluid>
                <Link>
                    <FeaturedContent onHoverStart={() => setHover(!hovered)} 
                        onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor} onHoverEnd={() => setHover(!hovered)}>
                        <CusFlex>
                            <h3>Featured Project</h3>
                        </CusFlex>
                        <h2 className="featured-title"> 
                            Docket
                            <span className="arrow">
                            <motion.svg 
                                animate={{x:hovered ? 40 : 0 }}
                                transition={{duration:.6,ease:[.6,.5,-0.01,.9]}}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                                                <path
                                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                fill="#FFF"
                                                fillRule="evenodd"
                                                ></path>
                                            </motion.svg>
                            </span>
                        </h2>
                    </FeaturedContent>
                    <FeaturedVideo>
                        <video loop autoPlay muted src={introVideo}>
                        </video>
                    </FeaturedVideo>
                    
                </Link>
            </ContainerFluid>
            <Container>
                <FeaturedProject>
                    <Flex flexCenter onClick={() => setToggle(!toggleMenu)}>
                        <button onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor}>
                            <span>Let my Project speak for itself</span>
                        </button>
                    </Flex>
                </FeaturedProject>
            </Container>
        </HomeFeaturedSection>
        </Router>
    )
}

export default HomeFeatured
