import React from 'react';
import "./App.css";
import NavBar from "./Components/NavBarComponent/NavBar";
import HomePage from "./Components/HomePageComponent/HomePage";
import ProjectsPage from './Components/ProjectsComponent/ProjectsPage';
import AboutPage from './Components/AboutPageComponent/AboutPage';
import ContactPage from './Components/ContactPageComponent/ContactPage';

function App() {

  const handleClickScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
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
