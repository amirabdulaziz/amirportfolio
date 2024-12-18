
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Project from "./pages/Project";

import { useEffect } from "react";

import SectionContextProvider from "./context/SectionContext";

// Aos animation
import "aos/dist/aos.css";
import Aos from "aos";
import React from "react";

function App() {
  // initiate aos animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <SectionContextProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/more-project" exact component={Project} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </SectionContextProvider>
    </Router>
  );
}

export default App;
