import React, { useEffect, useState } from 'react';
import "./App.css";
import NavBar from "./Components/NavBarComponent/NavBar";
import HomePage from "./Components/HomePageComponent/HomePage";
import ProjectsPage from './Components/ProjectsComponent/ProjectsPage';
import AboutPage from './Components/AboutPageComponent/AboutPage';
import ContactPage from './Components/ContactPageComponent/ContactPage';

function App() {

  const [mousePositon, setMousePosition] = useState({ x: 0, y: 0 });

  const customCursor = document.getElementById('custom-cursor');

  console.log("mousePositon : ", mousePositon);

  // mouse move event to get cursor position
  useEffect(() => {

    const mouseMoveListenerEventHandler = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    if (customCursor) {
      customCursor.style.top = `calc(${mousePositon.y}px - 15px)`;
      customCursor.style.left = `calc(${mousePositon.x}px - 15px)`;
    }

    window.addEventListener("mousemove", mouseMoveListenerEventHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveListenerEventHandler);
    }
  },);

  const handleClickScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div id='custom-cursor'></div>
      <NavBar handleNavBarClicksFunc={handleClickScroll} />
      <HomePage />
      <div id='projectsPageDiv'>
        <ProjectsPage />
      </div>
      <div id='aboutPageDiv'>
        <AboutPage />
      </div>
      <div id='contactPageDiv'>
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
