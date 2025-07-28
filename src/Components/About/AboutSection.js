// src/components/About/AboutSection.js
import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">🧑‍💼 About Me</h2>
        <p className="about-summary">
          I am <strong>Kumar Chandra</strong>, a Senior Technical Project
          Manager with over 14 years of rich and diverse experience in leading
          end-to-end software delivery, project governance, architecture design,
          and cross-functional team leadership. My expertise bridges the
          healthcare, financial, and enterprise tech landscapes — consistently
          delivering high-value solutions aligned with business goals.
        </p>
        <p className="about-summary">
          Beyond the corporate arena, I am a creative learner, skilled mentor,
          public speaker, and a passionate explorer of wellness through
          hypnotherapy, music, and meditation. My curiosity and love for
          learning have driven me to self-learn complex skills such as
          harmonica, skating, and swimming.
        </p>
        <p className="about-summary">
          With certifications in Prince2 Foundation and Microsoft Azure, I bring
          a blend of structured project discipline and agile technical
          innovation. I’m deeply committed to mentoring, CSR contributions, and
          inspiring people to grow — technically and personally.
        </p>

        <div className="education-block">
          <h3 className="subheading">🎓 Education</h3>
          <ul className="education-list">
            <li>
              <strong>
                Modern Public School, Deoghar, Jharkhand – 814112 (2003):
              </strong>
              Completed 10th grade with subjects Hindi, English, Mathematics,
              Social Science, and Science.
            </li>
            <li>
              <strong>DAV Public School, Bariatu, Ranchi (2003 – 2005):</strong>
              Pursued 11th & 12th in Science stream, followed by a gap year to
              prepare for engineering entrance exams.
            </li>
            <li>
              <strong>Sir MVIT, Bangalore – VTU (2006 – 2010):</strong>
              Bachelor’s in Information Science Engineering. Participated in
              creative and leadership initiatives.
            </li>
          </ul>
        </div>

        <p className="conclusion">
          This is my journey — equal parts tech and soul.
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
