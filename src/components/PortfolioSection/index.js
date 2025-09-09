import React, { Component } from "react";
import "./index.css";

class PortfolioSection extends Component {
  render() {
       const projects = [
  {
    title: "E-commerce Website",
    description:
      "A responsive online store with product catalog, cart, and payment integration.",
    image:
      "/e-commers.png",
  },
  {
    title: "Crypto Live Tracker",
    description:
      "Real-time cryptocurrency tracker with dynamic charts and price updates.",
    image:
      "/crypto.png",
  },
  {
    title: "IPL Dashboard",
    description:
      "Interactive dashboard displaying IPL match stats, teams, and live scores.",
    image:
      "ipl.png",
  },
  {
    title: "Social Media App",
    description:
      "Connect with friends, share posts, and interact on a modern social platform.",
    image:
      "/onlineShopping.jpg",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure mobile app for banking, transactions, and account management.",
    image:
      "/1.jpg",
  },
  {
    title: "Blog Platform",
    description:
      "A dynamic blog platform with content management and user authentication.",
    image:
      "/56391.jpg",
  },
];


    return (
      <section id="portfolio" className="portfolio">
        <h2>Our Work</h2>
        <p>Here are some of the projects we’ve delivered with creativity and precision.</p>

        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default PortfolioSection;
