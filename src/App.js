import React, { useState } from "react";
import Layout from "./components/Layout";
import HomeBanner from "./components/Home/HomeBanner";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./context/globalContext";
import HomePageContent from "./components/Home/HomePageContent";
import HomeFeatured from "./components/Home/HomeFeatured";
import HomeAbout from "./components/Home/HomeAbout";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  const [toggleMenu, setToggle] = useState(false);
  return (
    <>
      <Router>
        <Layout>
          <HomeBanner onCursor={onCursor} />
          <HomePageContent />
          <HomeFeatured
            onCursor={onCursor}
            toggleMenu={toggleMenu}
            setToggle={setToggle}
          />
          <HomeAbout />
        </Layout>
      </Router>
    </>
  );
}

export default App;
