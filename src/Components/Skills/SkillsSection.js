// src/Components/Skills/SkillsSection.js
import React from "react";
import "./SkillsSection.css";

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">🧠 Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Project Management</h3>
            <ul>
              <li>Agile, Scrum, Waterfall, Prince2 Foundation</li>
              <li>Stakeholder Communication</li>
              <li>Risk and Resource Planning</li>
              <li>JIRA, Confluence, MS Project</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Technical Expertise</h3>
            <ul>
              <li>.NET Core, Node.js, React.js, Angular</li>
              <li>SQL Server, MongoDB, Redis</li>
              <li>Microservices, Kafka, REST APIs</li>
              <li>CI/CD, GitHub Actions, Azure DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
