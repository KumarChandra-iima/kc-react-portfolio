// src/Components/Creative/CreativeSection.js
import React from "react";
import "./CreativeSection.css";

export default function CreativeSection() {
  return (
    <section id="creative" className="creative-section">
      <div className="creative-container">
        <h2 className="creative-title">🎨 Creative Corner</h2>

        <div className="creative-grid">
          <div className="creative-card">
            <h3>Singing & Music</h3>
            <p>I enjoy singing and self-learned the harmonica. Here’s my YouTube singing space:</p>
            <a
              href="https://www.youtube.com/@ajitkc11"
              target="_blank"
              rel="noreferrer"
              className="creative-link"
            >
              🎤 Visit Singing Channel
            </a>
          </div>

          <div className="creative-card">
            <h3>TalesToTinkle</h3>
            <p>Short motivational videos inspired by Shri Shri Ravishankar Ji.</p>
            <a
              href="https://www.youtube.com/@talestotinkle2508"
              target="_blank"
              rel="noreferrer"
              className="creative-link"
            >
              📺 TalesToTinkle Channel
            </a>
          </div>

          <div className="creative-card">
            <h3>Sketching & Poetry</h3>
            <p>I used to sketch during school and have published poems in class 12 and college magazines.</p>
          </div>

          <div className="creative-card">
            <h3>Self-learning</h3>
            <p>Skating, swimming, cooking — I love exploring new skills on my own and mentoring others.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
