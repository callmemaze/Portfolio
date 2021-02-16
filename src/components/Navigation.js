import React, { useState } from 'react'
import {motion,AnimatePresence} from "framer-motion"
import {Container, Flex} from "../styles/GlobalStyles"
import {Nav,NavHeader,CloseNav,NavList,NavFooter,NavVideo} from "../styles/NavStyle"
import {Instagram,Facebook} from "../assets/svg/social-icons"
import {FooterNav,FooterContent,FooterSocial} from "../styles/FooterStyle"
import docket from "../assets/video/docket.mp4"
import todolist from "../assets/video/todolist.mp4"
import { isBrowser } from 'react-device-detect'
const navRoute = [
    {id:0, title:'Todo List', path:'/todolist',video:todolist },
    {id:1, title:'docket', path:'/docket',video:docket },
    /* {id:2, title:'make it zero', path:'/make-it-zero',video:'make-it-zero.mp4' },
    {id:3, title:'it takes an island', path:'/it-takes-an-island',video:'it-takes-an-island.mp4' },
    {id:4, title:'50 beaches', path:'/50-beaches',video:'50-beaches.mp4' }, */
]

const Navigation = ({toggleMenu,setToggle,onCursor}) => {
    const [revealVideo, setVideo] = useState({
        show: false,
        video:todolist,
        key:"0",
    })
    return (
        <>
        
            <AnimatePresence>
                
                {toggleMenu && ( 
                    
                    <Nav initial={{x: "-100%"}} exit={{x:"-100%"}} animate={{x:toggleMenu ? 0 : "-100%"}}
                        transition = {{duration:.7, ease: [.6,.5,-0.01,.9]}}
                    >
                        
                    <Container>
                        <NavHeader>
                            <Flex spaceBetween noHeight>
                                <h2>Projects</h2>
                                <CloseNav onClick = {() => setToggle(!toggleMenu)} onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor}>
                                    <button>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </CloseNav>
                            </Flex>
                        </NavHeader>
                        <NavList>
                            <ul>
                                {navRoute.map(route => (
                                    <motion.li onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} onHoverStart={() => setVideo({show:true, video:route.video,key:route.id})} 
                                        onHoverEnd={() => setVideo({show:false, video:route.video,key:route.id})}
                                        key={route.id}>
                                    
                                    <a href={"https://dipesh-shrestha00.github.io/ReactToDoList/"} target="_blank">
                                        <motion.div initial={{x:-108}} whileHover={{x:-40 , transition:{ 
                                            duration:0.4,ease: [0.6,0.05,-0.01,0.9] }}} className="link">
                                            <span className="arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                                                <path
                                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                fill="#FFF"
                                                fillRule="evenodd"
                                                ></path>
                                            </svg>
                                            </span>
                                            {route.title}
                                        </motion.div>
                                    </a>
                                    
                                </motion.li>
                                ))} 
                            </ul>
                        </NavList>
                        <NavFooter>
                            <Flex>
                                <FooterContent onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor}>
                                    <p>dipeshshtha4@gmail.com</p>
                                </FooterContent>
                                <FooterSocial>
                        <a href="" onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}>
                            <Instagram/>
                        </a>
                        <a href="" onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}>
                            <Facebook/>
                        </a>
                        <a href="" onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#EA281E"
      fillRule="nonzero"/></svg>
                        </a>
                    </FooterSocial>
                            </Flex>
                        </NavFooter>
                        {isBrowser ? <NavVideo>
                            <motion.div animate={{width:revealVideo.show ? 0 : "100%"}} className="reveal"></motion.div>
                            <div className="video">
                                <AnimatePresence initial={false} exitBeforeEnter>
                                    <motion.video loop autoPlay muted 
                                    key={revealVideo.key}
                                    initial = {{opacity:0}}
                                    exit={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{
                                        duration:0.2,
                                        ease:"easeInOut"
                                    }}
                                    src={`${revealVideo.video}`}></motion.video>
                                </AnimatePresence>
                            </div>
                        </NavVideo> : null}
                        
                    </Container>
                    
                </Nav>
                
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation
