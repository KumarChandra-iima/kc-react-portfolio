// src/Components/Projects/ProjectsSection.js
import React from "react";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">💼 Work & Projects</h2>
        <div className="projects-grid">

          <div className="project-card">
            <h3>Cyclus HIS Billing System</h3>
            <p>
              Led end-to-end development of a hospital billing system, integrating Nphies claim processing, MongoDB, and .NET Core.
            </p>
            <span className="tech-tag">.NET Core</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Healthcare</span>
          </div>

          <div className="project-card">
            <h3>HL7 Mirth Integration</h3>
            <p>
              Designed and delivered HL7-compliant messaging pipelines using Kafka and MirthConnect to external healthcare systems.
            </p>
            <span className="tech-tag">MirthConnect</span>
            <span className="tech-tag">Kafka</span>
            <span className="tech-tag">HL7</span>
          </div>

          <div className="project-card">
            <h3>Legacy Migration – Wells Fargo</h3>
            <p>
              Modernized VB6 banking applications to C# with ReactJS frontend, improving performance and maintainability.
            </p>
            <span className="tech-tag">VB6</span>
            <span className="tech-tag">ReactJS</span>
            <span className="tech-tag">.NET Core</span>
          </div>

        </div>
      </div>
    </section>
  );
}
