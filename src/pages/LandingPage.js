// src/pages/LandingPage.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./LandingPage.css";
import { ToastContainer } from "react-toastify";
import AboutSection from "../Components/About/AboutSection";
import SkillsSection from "../Components/Skills/SkillsSection";
import ProjectsSection from "../Components/Projects/ProjectsSection";
// import CreativeSection from "../Components/Creative/CreativeSection";
import ContactOverlay from "../Components/Contact/ContactOverlay";
import FloatingNavButton from "../Components/FloatingNav/FloatingNavButton";
// import CertificationsSection from "../Components/Certifications/CertificationsSection";

export default function LandingPage() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <section
        id="top"
        className="landing-page min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white text-gray-800 p-8"
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4 animate-fade-in">
            Kumar Chandra
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 animate-slide-in">
            Senior Technical Project Manager | Tech Leader & .NET Architect | Turning Business Insights into Azure Scalable Software | PRINCE2® | 14+ Years
          </h2>
          <p className="mb-8 text-lg md:text-xl animate-fade-in-delay">
            Bridging technology with purpose — 14+ years of delivering impact in
            healthcare, finance, and CSR. Welcome to my digital portfolio.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="about" smooth={true} duration={500} className="nav-btn">
              👨‍💼 About Me
            </Link>
            <Link to="skills" smooth={true} duration={500} className="nav-btn">
              🧠 Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="nav-btn"
            >
              💼 Work
            </Link>
            {/* <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="nav-btn"
            >
              📜 Certifications
            </Link> */}
            {/* <Link
              to="creative"
              smooth={true}
              duration={500}
              className="nav-btn"
            >
              🎨 Creative
            </Link> */}
            <button
              onClick={() => setShowContact(true)}
              className="nav-btn bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md shadow-lg transition duration-300"
            >
              💌 Contact
            </button>
          </div>
        </div>
      </section>

      {/* Scroll Sections */}
      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="experience">
        <ProjectsSection />
      </section>

      {/* <section id="certifications">
        <CertificationsSection />
      </section>
      <section id="creative">
        <CreativeSection />
      </section> */}

      {showContact && <ContactOverlay onClose={() => setShowContact(false)} />}

      <FloatingNavButton triggerContactOverlay={() => setShowContact(true)} />

      <ToastContainer position="bottom-right" />
    </div>
  );
}
