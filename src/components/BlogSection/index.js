import React, { Component } from "react";
import "./index.css";

class BlogSection extends Component {
  render() {
    const blogs = [
      {
        title: "The Future of Web Design",
        description:
          "Discover the latest trends in UI/UX design and how they shape modern digital products.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Building Scalable Web Apps",
        description:
          "A beginner-friendly guide to understanding how to build scalable applications.",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Why Mobile First Matters",
        description:
          "Learn why designing for mobile first is essential in today’s fast-paced digital world.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      },
    ];

    return (
      <section className="blogs">
        <h2>Latest Blogs</h2>
        <p>Stay updated with our latest insights and articles.</p>
        <div className="blogs-container">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href="#" className="btn-secondary">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BlogSection;
