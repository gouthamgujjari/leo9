import React, { Component } from "react";
import PortfolioSection from "../PortfolioSection";
import BlogSection from "../BlogSection";
import "./index.css";

class ServicesSection extends Component {
  render() {
    const services = [
      {
        title: "UI/UX Design",
        description:
          "We create user-friendly and attractive designs that improve user experience.",
        icon: "🎨",
      },
      {
        title: "Web Development",
        description:
          "We build responsive, scalable websites using modern technologies.",
        icon: "💻",
      },
      {
        title: "Mobile Apps",
        description:
          "We deliver cross-platform mobile apps to reach customers everywhere.",
        icon: "📱",
      },
    ];

    return (
      <div className="container">
        <h2>What We Do</h2>
        <p>
          We help businesses unlock their digital potential and achieve goals
          through innovative design and technology.
        </p>
        <div className="card-container">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn-secondary">Learn More</button>
            </div>
          ))}
        </div>
        
        <PortfolioSection />
        <BlogSection />
</div>
    );
  }
}

export default ServicesSection;
