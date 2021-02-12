import React, { useState } from "react"
//styled-components
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {normalize} from "styled-normalize";

//components
import Header from "./Header"
import { useGlobalStateContext,useGlobalDispatchContext } from "../context/globalContext";
import CustomCursor from "./CustomCursor";
import Navigation from "./Navigation";
import Footer from "./Footer";


const GlobalStyle = createGlobalStyle
`
    ${normalize}
    *{
        text-decoration:none;
        cursor:none;
        user-select:none;
    }
    html{
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
        font-size:16px;
        
    }
    body{
        font-family:-apple-system, BlinkMacSystemfont,"Sogoe UI", Roboto, Oxygen, Ubunto,Cantarell,'Open Sans','Helvetic Neve',sans-serif;
        background: ${props => props.theme.background};
        overscroll-behavior:none;
        overflow-x:hidden;
    }
`

const Layout = ({ children }) => {
  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  })
  const darkTheme = {
    background: "#000",
    text:"#fff",
    red:"#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }
  const whiteTheme = {
    background: "#fff",
    text:"#000",
    red:"#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }
  const {currentTheme, cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type:"CURSOR_TYPE", cursorType: cursorType})
  }
  
  const [toggleMenu,setToggle] = useState(false)

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : whiteTheme}>
      <GlobalStyle/> 
      <CustomCursor toggleMenu={toggleMenu}/>
      <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggle={setToggle} hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}/>
      <Navigation toggleMenu={toggleMenu} setToggle={setToggle} onCursor={onCursor} hamburgerPosition={hamburgerPosition} setHamburgerPosition={setHamburgerPosition}/>
      <main>{children}</main>
      <Footer onCursor={onCursor}/>
    </ThemeProvider>      
  )
}

export default Layout
