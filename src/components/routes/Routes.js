import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import OneProject from "../one-project/OneProject";
import Contact from "../contact/Contact";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/project/:id">
          <OneProject />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default Routes;
