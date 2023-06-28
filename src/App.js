import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Pages/Home.js";
import Experience from "./components/Pages/Experience";
import Projects from "./components/Pages/Projects";
import ContactMe from "./components/Pages/ContactMe";
import MyLatestProject from "./components/Pages/My-Latest-Project";
import MoreAboutMe from "./components/Pages/More-About-Me";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route
            path="/Experience"
            exact
            Component={Experience}
          />
          <Route
            path="/Projects"
            exact
            Component={Projects}
          />
          <Route
            path="/Contact-me"
            exact
            Component={ContactMe}
          />
          <Route
            path="/My-Latest-Project"
            exact
            Component={MyLatestProject}
          />
          <Route
            path="/More-About-Me"
            exact
            Component={MoreAboutMe}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
