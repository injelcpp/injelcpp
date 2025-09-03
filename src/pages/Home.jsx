import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Asset imports (ensure these exist in your project)
import logo from '../../assets/logo.png';
import womanPhoto from '../../assets/BABAE_SA_OLLOPA_WALANG_BG.png';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import youtubeIcon from '../../assets/youtube.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import searchIcon from '../../assets/search.svg';
import HomeIcon from '../../assets/HomeIcon.svg';
import AboutUsIcon from '../../assets/AboutUsIcon.svg';
import OurServicesIcon from '../../assets/OurServicesIcon.svg';
import OurClientsIcon from '../../assets/OurClientsIcon.svg';
import InternshipIcon from '../../assets/InternshipIcon.svg';
import ContactUsIcon from '../../assets/ContactUsIcon.svg';
import FAQsIcon from '../../assets/FAQsIcon.svg';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(v => !v), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeSidebar();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeSidebar]);

  return (
    <div className="home-page-container">
      {/* Top Navigation */}
      <nav className="top-navigation" aria-label="Global">
        <div className="nav-left">
          <button
            className={`hamburger-menu ${isSidebarOpen ? 'open' : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            aria-expanded={isSidebarOpen}
            aria-controls="primary-sidebar"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <Link to="/" className="nav-logo" aria-label="Ollopa Home">
            <img className="logo-image" alt="Ollopa Logo" src={logo} />
          </Link>
        </div>

        <div className="nav-center">
          <Link to="/events" className="nav-link">Events</Link>
        </div>

        <div className="nav-actions">
          <div className="nav-buttons" role="group" aria-label="Primary actions">
            <Link to="/login" className="nav-button log-in-button">Log In</Link>
            <Link to="/application" className="nav-button apply-now-button">Apply Now</Link>
          </div>

          <div className="nav-search" role="search">
            <input className="search-input" placeholder="Search..." aria-label="Search" />
            <img className="search-icon" alt="Search" src={searchIcon} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text-content">
          <h1 className="company-title">OLLOPA CORPORATION</h1>
          <h2 className="tagline">Connecting Communities through Tech, Travel and Commerce</h2>
          <p className="description">
            Ollopa Corp, founded in 2019, is a dynamic company specializing in providing
            exceptional services and innovative solutions. We are dedicated to delivering
            high-quality products and services that cater to the evolving needs of our
            diverse clientele. Take a virtual stroll with us and learn what it's like to
            work with a company focused on delivering cutting-edge solutions in various
            industries. Get a sneak peek at the innovative projects we've been working on.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="ring ring-outer" />
          <div className="ring ring-inner" />
          <img className="hero-woman-photo" alt="" src={womanPhoto} />

          {/* Floating UI chips (visual only) */}
          <div className="floating-card c1">
            <div className="avatar" />
            <div className="fc-lines">
              <span>Lorem ipsum dolor</span>
              <small>sit amet</small>
            </div>
          </div>

          <div className="floating-card c2">
            <div className="avatar" />
            <div className="fc-lines">
              <span>Lorem ipsum dolor sit</span>
              <small>amet</small>
            </div>
            <span className="mini-chip">Lorem</span>
          </div>

          <div className="floating-card c3">
            <div className="dots" />
          </div>
        </div>
      </header>

      {/* Social Links */}
      <footer className="social-links-bar" aria-label="Social links">
        <a href="#" className="social-link">
          <img src={facebookIcon} alt="Facebook" />
          <span>Facebook</span>
        </a>
        <a href="#" className="social-link">
          <img src={instagramIcon} alt="Instagram" />
          <span>Instagram</span>
        </a>
        <a href="#" className="social-link">
          <img src={youtubeIcon} alt="Youtube" />
          <span>Youtube</span>
        </a>
        <a href="#" className="social-link">
          <img src={linkedinIcon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </footer>

      {/* Sidebar */}
      <aside id="primary-sidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`} aria-label="Sidebar">
        <button className="close-sidebar-button" onClick={toggleSidebar} aria-label="Close Sidebar">&times;</button>
        <div className="sidebar-logo">
          <img src={logo} alt="Ollopa Logo" />
        </div>
        <nav className="sidebar-nav">
          <Link to="/" onClick={toggleSidebar} className="sidebar-link active">
            <img src={HomeIcon} alt="" className="sidebar-icon" />
            Home
          </Link>
          <Link to="/about" onClick={toggleSidebar} className="sidebar-link">
            <img src={AboutUsIcon} alt="" className="sidebar-icon" />
            About Us
          </Link>
          <Link to="/services" onClick={toggleSidebar} className="sidebar-link has-submenu">
            <img src={OurServicesIcon} alt="" className="sidebar-icon" />
            Our Services
          </Link>
          <Link to="/our-clients" onClick={toggleSidebar} className="sidebar-link">
            <img src={OurClientsIcon} alt="" className="sidebar-icon" />
            Our Clients
          </Link>
          <Link to="/internship" onClick={toggleSidebar} className="sidebar-link">
            <img src={InternshipIcon} alt="" className="sidebar-icon" />
            Internship
          </Link>
          <Link to="/contact-us" onClick={toggleSidebar} className="sidebar-link">
            <img src={ContactUsIcon} alt="" className="sidebar-icon" />
            Contact Us
          </Link>
          <Link to="/faqs" onClick={toggleSidebar} className="sidebar-link">
            <img src={FAQsIcon} alt="" className="sidebar-icon" />
            FAQs
          </Link>
        </nav>
      </aside>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'visible' : ''}`}
        onClick={toggleSidebar}
      />
    </div>
  );
}

export default Home;

