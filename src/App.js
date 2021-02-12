import React,{useState} from "react"
import Layout from './components/Layout';
import HomeBanner from "./components/Home/HomeBanner"
import { useGlobalDispatchContext, useGlobalStateContext } from "./context/globalContext"
import HomePageContent from "./components/Home/HomePageContent"
import HomeFeatured from "./components/Home/HomeFeatured"
import HomeAbout from "./components/Home/HomeAbout"
function App() {
  const {cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type:"CURSOR_TYPE", cursorType: cursorType})
  }
  const [toggleMenu,setToggle] = useState(false)
  return (
    <>
      <Layout>
    <HomeBanner onCursor={onCursor}/>
    <HomePageContent/>
    <HomeFeatured onCursor={onCursor} toggleMenu={toggleMenu} setToggle={setToggle}/>
    <HomeAbout/>
  </Layout>
    </>
  );
}

export default App;
