import React, { useState } from "react";
import { Link } from "react-scroll";
import "./FloatingNav.css";

export default function FloatingNavButton({ triggerContactOverlay }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-nav-container">
      <button
        className="floating-btn"
        onClick={() => setOpen(!open)}
        title="Quick Navigation"
      >
        ⚙️
      </button>

      {open && (
        <div className="floating-menu glass-popup">
            <Link
                to="top"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                className="nav-link"
                >
                ⬆️ Top
            </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
          >
            👨‍💼 About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
          >
            🧠 Skills
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
          >
            👔 Experience
          </Link>
          {/* <Link
            to="creative"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
          >
            🎨 Creative
          </Link> */}
        <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download
            className="nav-link"
            onClick={() => setOpen(false)}
            >
            📄 Resume
        </a>

          <button
            className="nav-link" // ✅ Same class as other nav items
            onClick={() => {
              triggerContactOverlay();

              setOpen(false);
            }}
          >
            💌 Contact
          </button>
          

        </div>
      )}
    </div>
  );
}
