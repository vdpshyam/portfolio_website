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

  function onMouseEnterHandler() {
    let customCursor = document.getElementById('custom-cursor');
    customCursor.style.padding = '2px';
    customCursor.style.border = '2px solid #2121f8';
    customCursor.style.transition = 'border 0.1s';

    let customCursorContent = document.getElementById('custom-cursor-content');
    customCursorContent.style.borderRadius = '23px';
    customCursorContent.style.height = '23px';
    customCursorContent.style.width = '23px';
    customCursorContent.style.transition = 'height 0.1s, width 0.1s';
  }

  function onMouseLeaveHandler() {
    let customCursor = document.getElementById('custom-cursor');
    customCursor.style.padding = '4px';
    customCursor.style.border = 'none';
    customCursor.style.transition = 'border 0.1s';

    let customCursorContent = document.getElementById('custom-cursor-content');
    customCursorContent.style.borderRadius = '30px';
    customCursorContent.style.height = '30px';
    customCursorContent.style.width = '30px';
    customCursorContent.style.transition = 'height 0.1s, width 0.1s';
  }

  return (
    <div>
      <div id='custom-cursor'>
        <div id='custom-cursor-content'>
        </div>
      </div>
      <NavBar handleNavBarClicksFunc={handleClickScroll} onMouseEnterHandlerForChangingCustomCursor={ onMouseEnterHandler } onMouseLeaveHandlerForChangingCustomCursor={ onMouseLeaveHandler }/>
      <HomePage />
      <div id='projectsPageDiv'>
        <ProjectsPage onMouseEnterHandlerForChangingCustomCursor={ onMouseEnterHandler } onMouseLeaveHandlerForChangingCustomCursor={ onMouseLeaveHandler } />
      </div>
      <div id='aboutPageDiv'>
        <AboutPage />
      </div>
      <div id='contactPageDiv'>
        <ContactPage onMouseEnterHandlerForChangingCustomCursor={ onMouseEnterHandler } onMouseLeaveHandlerForChangingCustomCursor={ onMouseLeaveHandler }/>
      </div>
    </div>
  );
}

export default App;
