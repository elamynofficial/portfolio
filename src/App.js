import React, { Component, useState} from 'react';
import emailjs from "@emailjs/browser";
import "../../portfolio/src/components/home.css";
import profile from "./assets/Aminu2.png";
import ecom from "./assets/2227848.jpg";
import task from "./assets/377279-PC31KQ-40.jpg";
import portfolio from "./assets/images (10).png";
import database from "./assets/4091.jpg";
import uiux from "./assets/mobile-ui-ux-concept-illustration_114360-10976.jpg";
import web from "./assets/programming-concept-illustration_114360-1351.jpg";
import contact from "./components/contact.js";



function App() {
  return (
  <>
      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" class="hero">
        <div class="hero-content">
          <img src={profile} alt="Madobi" class="profile-img" />
          <h1>Aminu Abdulkadir</h1>
          <p>Front-end designer & Graphic Designer</p>
          <a href="#contact" class="btn">Get in Touch</a>
        </div>
      </section>

      <section id="about">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <p>I'm a passionate developer with 5 years of experience in creating web applications. I specialize in modern JavaScript frameworks and user-centric design principles.</p>
        </div>
      </section>

      <section id="skills">
        <h2 class="section-title">Skills</h2>
        <div class="skills-container">
          <div class="skill-card">
            <i class="fas fa-code"></i>
            <div class="project-image">
              <img src={web} alt="Project 1" />
            </div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React, Node.js</p>
          </div>
          <div class="skill-card">
            <i class="fas fa-palette"></i>
            <div class="project-image">
              <img src={uiux} alt="Project 1" />
            </div>
            <h3>UI/UX Design</h3>
            <p>Figma, Adobe XD, User Research, Prototyping</p>
          </div>
          <div class="skill-card">
          <div class="project-image">
              <img src={database} alt="Project 1" />
            </div>
            <i class="fas fa-database"></i>
            
            <h3>Database</h3>
            <p>MySQL, MongoDB, PostgreSQL, Firebase</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <img src={ecom} alt="Project 1" />
            </div>
            <div class="project-info">
              <h3>E-commerce Platform</h3>
              <p>Full-stack e-commerce solution with React and Node.js</p>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
            <img src={task} alt="Project 2" />
            </div>
            <div class="project-info">
              <h3>Task Management App</h3>
              <p>Real-time collaborative task management system</p>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src={portfolio} alt="portfolio" />
            </div>
            <div class="project-info">
              <h3>Portfolio Website</h3>
              <p>Responsive portfolio template with CSS Grid</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 class="section-title">Contact Me</h2>
      <div className='contact-content'>
        <contact />
        <section className="contact">
            <h2>Contact Me</h2>
            <form >
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit">Send</button>
            </form>
        </section>
      </div>
    
       
       
    </section><footer>
        <div class="social-links">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer></>

  )
}

export default App
