import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HeroSection} />
        <Route path="/services" component={ServicesSection} />
        <Route path="/portfolio" component={PortfolioSection} />
        <Route path="/blogs" component={BlogSection} />
      </Switch>
    </Router>
  );
}

export default App;
