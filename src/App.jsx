import React from 'react';
import "./App.css";
import NavBar from "./Components/NavBarComponent/NavBar";
import HomePage from "./Components/HomePageComponent/HomePage";
import ProjectsPage from './Components/ProjectsComponent/ProjectsPage';
import AboutPage from './Components/AboutPageComponent/AboutPage';
import ContactPage from './Components/ContactPageComponent/ContactPage';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
