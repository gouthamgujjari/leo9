import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";


import "./index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem("theme") || "light",
    };
  }

  componentDidMount() {
    document.body.className = this.state.theme;
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === "light" ? "dark" : "light";
    this.setState({ theme: newTheme }, () => {
      document.body.className = newTheme;
      localStorage.setItem("theme", newTheme);
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <nav className="navbar">
        <div className="brand">
          <h1 className="brand-name">
            LEO<span className="highlight">9</span>
          </h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blogs">Blogs</Link>
          <button className="btn-primary">Let’s Talk</button>
          <button onClick={this.toggleTheme} className="theme-btn">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
