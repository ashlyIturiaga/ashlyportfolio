import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import { FaJava, FaHtml5, FaPython, FaCss3Alt, FaJsSquare, FaGithub, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import AshImage from './Ash.png';
import AshlyImage from './Ashly.png';
import Image from './AI.png';
import cafe from './cafe.png';
import eventImage from './eventor.jpg';
import todoImage from './todo.png';
import "./NavbarStyles.css";
import { Link } from 'react-scroll';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      offset: 160, 
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>   
  );
}
function Navbar() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <a href="navbarlogo">
        <img src={Image} alt="Logo" className="navlogo" />
      </a>
      <div>
        <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
        <a href='nav' className='li'> <Link to="landing" smooth={true} duration={300} >Home</Link></a>
       <a href='nav' className='li'> <Link to="about" smooth={true} duration={300} >About</Link></a>
       <a href='nav' className='li'> <Link to="skills" smooth={true} duration={300} >Skills</Link></a>
       <a href='nav' className='li'> <Link to="projects" smooth={true} duration={300} >Projects</Link></a>
       <a href='nav' className='li'> <Link to="contact" smooth={true} duration={300} >Contact</Link></a>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <div className='landing'>
      <div className="image-holder">
        <img src={AshImage} alt="ash" />
      </div>
      <div className='Nameko'>
        <p>Hi I'm</p>
        <h1 className="ashly">Ashly Ituriaga</h1>
        <p>Graphics Designer</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <div className="image-holder-ashly">
        <img src={AshlyImage} alt="ashly" />
      </div>
      <h2>About Me</h2>
      <p>
        I'm Ashly, a student at Western Institute of Technology and a passionate artist specializing in captivating visuals. From branding to digital art, I blend creativity with strategic thinking for impactful designs.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-container" data-aos="fade-left">
      <h2>Skills</h2>
      <div className="skill java" data-aos="zoom-in">
        <p><FaJava /> Java: Intermediate</p>
      </div>
      <div className="skill html" data-aos="zoom-in">
        <p><FaHtml5 /> HTML: Intermediate</p>
      </div>
      <div className="skill python" data-aos="zoom-in">
        <p><FaPython /> Python: Intermediate</p>
      </div>
      <div className="skill css" data-aos="zoom-in">
        <p><FaCss3Alt /> CSS: Intermediate</p>
      </div>
      <div className="skill javascript" data-aos="zoom-in">
        <p><FaJsSquare /> JavaScript: Beginner</p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="zoom-in">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project" data-aos="zoom-in-left">
          <h3 className="project-title">Eventor</h3>
          <img src={eventImage} alt="Eventor Screenshot" className="project-image" />
          <p className="project-description">An event management app using MERN stack</p>
        </div>
        <div className="project" data-aos="zoom-in-right">
          <h3 className="project-title">Logo Design</h3>
          <img src={cafe} alt="Cafe Logo" className="project-image" />
          <p className="project-description">A Logo for a small cafe business</p>
        </div>
        <div className="project" data-aos="zoom-in-right">
          <h3 className="project-title">To-Do List App</h3>
          <img src={todoImage} alt="Todo App Screenshot" className="project-image" />
          <p className="project-description">A Todo App Made using React and MongoDB</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>Email: ashlyituriaga@gmail.com</p>
      <p>RaketPH: <a href="https://www.raket.ph/ashlyituriaga" target="_blank" rel="noreferrer">raket.ph/ashlyituriaga</a></p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-offset='0'>
      <div className="social-links">
        <a href="https://github.com/ashlyIturiaga" target="_blank" rel="noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://web.facebook.com/ashly.ituriaga.9/" target="_blank" rel="noreferrer">
          <FaFacebook size={24} /> Facebook
        </a>
        <a href="https://www.instagram.com/ash_ituriaga/" target="_blank" rel="noreferrer">
          <FaInstagramSquare size={24} /> Instagram
        </a>
      </div>
    </footer>
  );
}

export default App;