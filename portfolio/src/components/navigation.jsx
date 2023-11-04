import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Navigation from "./Navigation";

const App = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <Navigation />
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <section id="section1">
              <h1>Section 1</h1>
            </section>
            <section id="section2">
              <h1>Section 2</h1>
            </section>
            <section id="section3">
              <h1>Section 3</h1>
            </section>
          </div>
        )}
      />
      <ScrollLink
        to="section1"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset as needed
        duration={500}
        className="scroll-to-top"
        onClick={scrollToTop}
      >
        Back to Top
      </ScrollLink>
    </Router>
  );
};

export default App;
