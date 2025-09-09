import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ServicesSection from "../ServicesSection";
import "./index.css";

class HeroSection extends Component {
  changetoservices = () => {
    this.props.history.push("/services");
  };

  render() {
    return (
      <>
      <div className="hero">
        <h1>Digital Products and Experiences</h1>
        <p>We design, build, and scale human-centered products with impact.</p>
        <button className="btn-primary" onClick={this.changetoservices}>
          Learn More
        </button>
        
      </div>
      <ServicesSection />
      </>
    );
  }
}

export default withRouter(HeroSection);
