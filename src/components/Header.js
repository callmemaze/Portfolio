import React,{useEffect,useRef} from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom'
import { useGlobalStateContext } from '../context/globalContext'
import { useGlobalDispatchContext } from '../context/globalContext'
import { Container, Flex } from '../styles/GlobalStyles'
import { HeaderNav,Logo,Menu } from '../styles/HeaderStyles'
import UseElementPos from "../Hooks/UseElementPos"


function Header({
    onCursor,
    setHamburgerPosition,
    setToggle,
    toggleMenu,
  }) {
    const {currentTheme} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()
    const hamburger = useRef(null)
    const position = UseElementPos(hamburger)
    const toggleTheme = () => {
        if (currentTheme === "dark") {
        dispatch({ type: "TOGGLE_THEME", theme: "light" })
        } else {
        dispatch({ type: "TOGGLE_THEME", theme: "dark" })
        }
    }
    const menuHover = () => {
        onCursor("locked")
        setHamburgerPosition({ x: position.x, y: position.y + 65 })
      }
    useEffect(() => {
        window.localStorage.setItem("theme", currentTheme)
      }, [currentTheme])
    return (
        <Router>
            <HeaderNav animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}>
                <Container>
                    <Flex spaceBetween noHeight>
                        <Logo onMouseEnter={() => onCursor("hovered")}
                            onMouseLeave={onCursor}>
                            <Link className="tag">&lt;/</Link>
                            <Link to='/'>DIPESH</Link>
                            <span onClick={toggleTheme} onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}></span>
                            <Link to='/'>S</Link>
                            <Link className="tag">&gt;</Link>
                        </Logo>
                        <Menu onClick={() => setToggle(!toggleMenu)}
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}>
                            <button>
                                <span></span>
                                <span></span>
                            </button>
                        </Menu>
                    </Flex>
                </Container>
            </HeaderNav>
        </Router>
    )
}

export default Header
