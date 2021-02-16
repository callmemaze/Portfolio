import React,{useEffect, useRef} from 'react'
import { useGlobalStateContext } from '../../context/globalContext'
import WindowSize from '../../Hooks/WindowSize'
import { Banner, BannerTitle, Headline, Video, Canvas } from '../../styles/HomeStyles'
import introVideo from "../../assets/video/intro.mp4"
const HomeBanner = ({onCursor}) => {
    let canvas = useRef(null)
    const size = WindowSize()
    const {currentTheme} = useGlobalStateContext()
    useEffect(() => {
        let renderingElement = canvas.current;
        let drawingElement = renderingElement.cloneNode()
        let drawingCtx = drawingElement.getContext("2d")
        let renderingCtx = renderingElement.getContext("2d")
        let lastX
        let lastY
        let moving = false
        renderingCtx.globalCompositeOperation = "source-over"
        renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
        renderingCtx.fillRect(0,0,size.width,size.height)

        renderingElement.addEventListener('mouseover', e => {
            moving = true
            lastX = e.pageX - renderingElement.offsetLeft
            lastY = e.pageY - renderingElement.offsetTop
        })

        renderingElement.addEventListener('mouseup', e => {
            moving = false
            lastX = e.pageX - renderingElement.offsetLeft
            lastY = e.pageY - renderingElement.offsetTop
        })
        renderingElement.addEventListener('touchmove', e => {
            moving = true
            lastX = e.pageX - renderingElement.offsetLeft
            lastY = e.pageY - renderingElement.offsetTop
        })

        renderingElement.addEventListener('touchend', e => {
            moving = false
            lastX = e.pageX - renderingElement.offsetLeft
            lastY = e.pageY - renderingElement.offsetTop
        })
        renderingElement.addEventListener('mousemove', e => {
            if(moving){
                drawingCtx.globalCompositeOperation = "source-over"
                renderingCtx.globalCompositeOperation = "destination-out"
                let currentX = e.pageX - renderingElement.offsetLeft
                let currentY = e.pageY - renderingElement.offsetTop
                drawingCtx.lineJoin = "round"
                drawingCtx.moveTo(lastX,lastY)
                drawingCtx.lineTo(currentX,currentY)
                drawingCtx.closePath()
                drawingCtx.lineWidth = 120
                drawingCtx.stroke()
                lastX = currentX
                lastY = currentY
                renderingCtx.drawImage(drawingElement,0,0)
            }
        })

    },[currentTheme])

    const parent = {
        initial:{y:800,opacity:0},
        animate:{
            y:0,
            opacity:1,
            transition:{
                staggerChildren:0.2,
            }
        }
    }

    const child = {
        initial:{y:800,opacity:0},
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:1,
                ease: [0.6,0.05,-0.01,0.9],
            }
        }
    }

    return (
        <Banner>
            <Video>
                <video height="100%" width="100%" autoPlay loop muted src={introVideo}/>
            </Video>
            
            <Canvas width={size.width} height={size.height} ref={canvas} 
                onMouseEnter={() => onCursor("hovered")} 
                onMouseLeave={onCursor}
            />
            <BannerTitle variants = {parent} initial = "initial" animate = "animate">
                <Headline variants = {child}>Hello World</Headline>
                <Headline variants = {child}>I'm Dipesh</Headline>
            </BannerTitle>
        </Banner>
    )
}

export default HomeBanner
