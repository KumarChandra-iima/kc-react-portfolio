// src/Components/Skills/SkillsSection.js
import React from "react";
import "./SkillsSection.css";

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
  <div className="skills-container">
    <h2 className="skills-title">🧠 Skills</h2>
    <div className="skills-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      
      <div className="skill-card">
        <h3>Project Management</h3>
        <ul>
          <li>Agile (Scrum, Kanban), Waterfall, PRINCE2 Foundation</li>
          <li>Stakeholder Communication, Team Leadership</li>
          <li>Risk & Resource Planning, Project Governance</li>
          <li>Tools: JIRA, Confluence, MS Project</li>
        </ul>
      </div>
      
      <div className="skill-card">
        <h3>Frontend Technologies</h3>
        <ul>
          <li>React.js, Angular, HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
          <li>UI Libraries: Material-UI, Bootstrap</li>
        </ul>
      </div>
      
      <div className="skill-card">
        <h3>Backend Technologies</h3>
        <ul>
          <li>.NET Core, Node.js, Express.js</li>
          <li>Microservices Architecture, REST APIs, Kafka</li>
        </ul>
      </div>

      <div className="skill-card">
        <h3>Database Systems</h3>
        <ul>
          <li>SQL: SQL Server, MySQL, PostgreSQL</li>
          <li>NoSQL: MongoDB, Redis</li>
        </ul>
      </div>
      
      <div className="skill-card">
        <h3>DevOps & Cloud</h3>
        <ul>
          <li>Azure</li>
          <li>CI/CD: Azure DevOps, GitHub Actions, Docker</li>
          <li>Version Control: Git</li>
        </ul>
      </div>
      
      <div className="skill-card">
        <h3>AI & Data</h3>
        <ul>
          <li>Prompt Engineering, ChatGPT, LLM APIs</li>
          <li>Machine Learning POC, Data Analysis</li>
        </ul>
      </div>
      
      <div className="skill-card">
        <h3>Developer Tools & IDEs</h3>
        <ul>
          <li>Visual Studio, VS Code</li>
          <li>Postman, Fiddler, Swagger</li>
        </ul>
      </div>
      
      <div className="skill-card">
        <h3>Other Skills</h3>
        <ul>
          <li>Mentoring & Training, Brown Bag Sessions</li>
          <li>Technical Documentation, Solution Design</li>
        </ul>
      </div>
      
    </div>
  </div>
</section>

  );
}
