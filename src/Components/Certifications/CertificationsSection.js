import React, { useEffect, useState } from "react";
import "./CertificationsSection.css";
import certData from "../../data/certifications.json";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const techWeights = {
  AI: 1,
  "Prompt Engineering": 2,
  ChatGPT: 3,
  ML: 4,
  Azure: 5,
  Docker: 6,
  DevOps: 7,
  AWS: 8,
};

const getSkillsFromName = (name) => {
  const skills = [];
  const lower = name?.toLowerCase() || "";
  if (lower.includes("docker")) skills.push("Docker");
  if (lower.includes("devops")) skills.push("DevOps");
  if (lower.includes("azure")) skills.push("Azure");
  if (lower.includes("aws")) skills.push("AWS");
  if (lower.includes("ml") || lower.includes("machine learning"))
    skills.push("ML");
  if (lower.includes("ai") || lower.includes("artificial intelligence"))
    skills.push("AI");
  if (lower.includes("chatgpt") || lower.includes("prompt"))
    skills.push("ChatGPT", "Prompt Engineering");
  return skills;
};

export default function CertificationsSection() {
  const [certifications, setCertifications] = useState([]);
  const [modalCert, setModalCert] = useState(null);

  useEffect(() => {
    const processed = certData.map((cert) => ({
      ...cert,
      skills: getSkillsFromName(cert.name),
    }));

    const sorted = [...processed].sort((a, b) => {
      const aWeight = Math.min(
        ...a.skills.map((skill) => techWeights[skill] || 99),
        99
      );
      const bWeight = Math.min(
        ...b.skills.map((skill) => techWeights[skill] || 99),
        99
      );
      return aWeight - bWeight;
    });

    setCertifications(sorted);
  }, []);

  const handleModalOpen = (cert) => {
    setModalCert(cert);
  };

  const handleModalClose = () => {
    setModalCert(null);
  };

  return (
    <section className="certifications-section" id="certifications">
      <div>
        <h2 className="certifications-title">🎓 Certifications & Trainings</h2>
      </div>
      <div className="certifications-scroll-wrapper">
        <div className="certifications-container">
          <div className="cert-grid">
            {certifications.length > 0 ? (
              certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-title">{cert.name}</div>
                  <div className="cert-meta">
                    {cert.authority} &nbsp;|&nbsp;
                    {cert.finishedOn || cert.startedOn}
                  </div>
                  <div className="cert-tags">
                    {cert.skills.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="cert-links">
                    <button
                      className="cert-button"
                      onClick={() => handleModalOpen(cert)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No certifications available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalCert && (
        <div className="cert-modal-overlay" onClick={handleModalClose}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cert-modal-close" onClick={handleModalClose}>
              ×
            </button>
            <h3>{modalCert.name}</h3>
            <p>
              <strong>Issued by:</strong> {modalCert.authority}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {modalCert.finishedOn || modalCert.startedOn}
            </p>
            <p>
              <strong>Technologies:</strong> {modalCert.skills?.join(", ")}
            </p>

           {modalCert.url ? (
  <a
    href={modalCert.url}
    target="_blank"
    rel="noopener noreferrer"
    className="cert-button"
  >
    View on LinkedIn Learning →
  </a>
) : (
  <div className="cert-pdf-container" style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
    <Document
      file={`/certificates/${modalCert.license}.pdf`}
      loading="Loading PDF..."
      error={
        <span>
          Unable to load PDF.
          <a
            href={`/certificates/${modalCert.license}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </span>
      }
    >
      <Page pageNumber={1} width={550} />
    </Document>
    <div style={{ marginTop: 8, textAlign: "center" }}>
      <a 
        href={`/certificates/${modalCert.license}.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download PDF
      </a>
    </div>
  </div>
)}

          </div>
        </div>
      )}
    </section>
  );
}
