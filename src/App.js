import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Pages/Home.js";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";
import ContactMe from "./components/Pages/ContactMe";
import AboutMe from "./components/Pages/About-Me";
import MyLatestProject from "./components/Pages/My-Latest-Project";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Resume" exact Component={Resume} />
          <Route path="/Projects" exact Component={Projects} />
          <Route
            path="/Contact-me"
            exact
            Component={ContactMe}
          />
          <Route path="/About-me" exact Component={AboutMe} />
          <Route
            path="/My-Latest-Project"
            exact
            Component={MyLatestProject}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
