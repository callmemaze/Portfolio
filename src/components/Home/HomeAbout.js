import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Flex } from "../../styles/GlobalStyles";
import {
  HomeAboutSection,
  About,
  Service,
  AccordionIcon,
  AccordionHeader,
  AccordionContent,
  CustomFlex,
} from "../../styles/HomeStyles";
import { useGlobalStateContext } from "../../context/globalContext";
const accordionIds = [
  {
    id: 0,
    title: "Web Development",
    results: ["HTML", "CSS", "SASS", "React", "PHP", "MERN"],
  },
  {
    id: 1,
    title: "Java",
    results: ["Swing", "OOPS"],
  },
  {
    id: 2,
    title: "Python",
    results: [],
  },
  {
    id: 3,
    title: "Mobile Development",
    results: ["React-Native"],
  },
];

const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0);
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional 300px before executing animation
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <CustomFlex>
          <About>
            <h2>
              Hope you enjoyed my portfolio that I developed. I know i have so
              much to learn and the project are not enough But I'm trying so
              hard to fit myself to it.
            </h2>
            <p>
              I'm currently learning to build a mobile application, machine
              learning and deep learning. As my project are less so, if anyone
              wants me in then pls to contact me. I will be grateful to work
              with you. Don't be shy, let's chat!
            </p>
          </About>
          <Service>
            <h3>Experience</h3>
            {accordionIds.map((details, index) => (
              <Accordian
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Service>
        </CustomFlex>
      </Container>
    </HomeAboutSection>
  );
};
const Accordian = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);
  const { currentTheme } = useGlobalStateContext();
  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{
          color: !isOpen && currentTheme === "dark" ? "#fff" : "#000",
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  );
};

export default HomeAbout;
