import React from 'react';
import "./App.css";
import NavBar from "./Components/NavBarComponent/NavBar";
import HomePage from "./Components/HomePageComponent/HomePage";
import ProjectsPage from './Components/ProjectsComponent/ProjectsPage';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
