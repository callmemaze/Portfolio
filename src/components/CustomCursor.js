import React,{useState,useEffect} from 'react'
import { Cursor } from '../styles/GlobalStyles'

//Context
import { useGlobalDispatchContext } from '../context/globalContext'
import { useGlobalStateContext } from '../context/globalContext'
function CustomCursor({toggleMenu}) {
    const {cursorType} = useGlobalStateContext()
    const [mousePos,setMousePos] = useState({
        x:400,
        y:400,
    })
    const onMouseMove = event => {
        const {pageX:x,pageY:y} = event
        setMousePos({x,y})
    }
    useEffect(() => {
        document.addEventListener("mousemove",onMouseMove)
        return () => {
            document.addEventListener("mousemove",onMouseMove)
        }
    }, [])
    return (
        <>
            <Cursor 
            className={`${!!cursorType ? "hovered": ""} ${cursorType} ${toggleMenu ? 'nav-open' : ""}`}
            style = {{left:`${mousePos.x}px`,top:`${mousePos.y}px`}}/>
        </>
    )
}

export default CustomCursor
