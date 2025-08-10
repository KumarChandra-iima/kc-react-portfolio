// src/components/About/AboutSection.js
import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
  <h2 className="section-title">🧑‍💼 About Me</h2>

  <p className="about-summary">
    I’m <strong>Kumar Chandra</strong>, an accomplished Senior Technical Project Manager with <strong>14+ years</strong> of proven expertise in delivering enterprise-level digital solutions and driving large-scale technology transformation. My leadership spans <strong>end-to-end software delivery, Agile project governance, and technical architecture</strong>, consistently bridging business strategy and technology execution across <strong>healthcare</strong> and <strong>financial services</strong> domains.
  </p>

  <p className="about-summary">
    Well-versed in <strong>cross-functional team leadership</strong>, I have managed diverse, high-performing teams to achieve excellence in areas like project initiation, scope definition, risk management, solution design, and process optimization. I excel at executing projects on time and within budget, with hands-on experience in <strong>proof-of-concept development</strong> and <strong>technology due diligence</strong>.
  </p>

  <p className="about-summary">
    Certified in <strong>PRINCE2 Foundation</strong> and <strong>Microsoft Azure</strong>, I combine industry-standard IT project management methodologies with cloud transformation expertise. Passionate about professional development, I foster a culture of learning by conducting knowledge-sharing, mentoring, and brown bag sessions to upskill teams and nurture future leaders.
  </p>

  <div className="education-block">
    <h3 className="subheading">🎓 Education</h3>
    <ul className="education-list">
      <li>
        <strong>IIM Ahmedabad (2020–2021): </strong> Accelerated General Management Program, focused on strategic leadership, business analytics, and operational excellence.
      </li>
      <li>
        <strong>Sir MVIT, Bangalore – VTU (2006–2010): </strong> B.E. in Information Science Engineering, with active involvement in tech events, innovation forums, and student leadership.
      </li>
      <li>
        <strong>DAV Public School, Ranchi (2005): </strong> Science (11th–12th); strategic preparation for engineering competitive exams.
      </li>
      <li>
        <strong>Modern Public School, Deoghar (2003): </strong> Academic distinction in STEM at the secondary level.
      </li>
    </ul>
  </div>

  <p className="about-summary">
    Beyond core project management, I champion <strong>Corporate Social Responsibility (CSR)</strong> initiatives and continuously promote holistic growth. As a creative learner and advocate for well-being, I explore <strong>clinical hypnotherapy, music, and meditation</strong>—blending technical leadership with personal development.
  </p>

  <p className="conclusion">
    This is my journey—a dynamic balance of technology strategy, transformation leadership, and human growth.
  </p>
</div>



      <div className="mt-4">
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download
          className="resume-btn"
        >
          📄 Download My Resume
        </a>
      </div>
    </section>
  );
}
