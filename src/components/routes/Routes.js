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
    <Router basename="/">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route path="/about" render={() => <About />}></Route>
        <Route path="/projects" render={() => <Projects />}></Route>
        <Route path="/project/:id" render={() => <OneProject />}></Route>
        <Route path="/contact" render={() => <Contact />}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default Routes;
