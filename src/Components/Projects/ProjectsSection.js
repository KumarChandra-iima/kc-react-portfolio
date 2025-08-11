// src/Components/Projects/ProjectsSection.js
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectsSection.css";
import InfosysLogo from "../../assets/logos/infosys.png";
import RazorLogo from "../../assets/logos/razor.png";
import AthenaLogo from "../../assets/logos/athena.png";
import IntegraLogo from "../../assets/logos/integra.png";
import WellsFargoLogo from "../../assets/logos/wellsfargo.png";
import NahilLogo from "../../assets/logos/nahil.png";
import CloudSolutionsLogo from "../../assets/logos/cloudSolutions.png"; // Client logo
import "./Timeline.css";

const experienceTimeline = [
  {
    company: "Infosys",
    logo: InfosysLogo,
    duration: "02 Aug 2010 – 17 Apr 2014",
    projects: [
      {
        title: "Budget Module, China Portal",
        description:
          "Intranet web app to manage budget requests from CCD and Facilities, implementing role-based routing and SQL-based data tracking.",
        tags: ["MVC3", "SQL", "Entity Framework"],
      },
      {
        title: "Instant Account Verification (IAV) using Yodlee",
        description:
          "Enabled instant account verification via third-party services, reducing verification time from days to seconds.",
        tags: ["Web Services", "C#", "TFS"],
      },
      {
        title: "Incident SLA Reporting Module",
        description:
          "Automated SLA calculations for incident management using LINQ and SQL Server, improving reporting efficiency.",
        tags: ["MVC", "LINQ", "SQL Server"],
      },
    ],
  },
  {
    company: "Razor Insights",
    logo: RazorLogo,
    duration: "01 Jul 2014 – 31 Mar 2015",
    projects: [
      {
        title: "One Spot PDF Billing",
        description:
          "Created a generic PDF generation engine using ACRO-fields and Factory Pattern to eliminate repetitive development for each hospital.",
        tags: [".NET", "PDF", "Factory Pattern"],
      },
      {
        title: "SQL Performance Optimization",
        description:
          "Refactored and indexed SQL queries to enhance the performance of legacy applications in production environments.",
        tags: ["SQL", "Performance", "Indexing"],
      },
    ],
  },
  {
    company: "Athena Health",
    logo: AthenaLogo,
    duration: "01 Apr 2015 – 25 Apr 2017",
    projects: [
      {
        title: "Athena Device Manager (ADM)",
        description:
          "Built and maintained .NET Tray App to manage clinical and payment devices, integrated with AthenaNet.",
        tags: ["WCF", ".NET", "Device Drivers"],
      },
      {
        title: "ADM Zipper & Automation Tools",
        description:
          "Created tools to automate DLL management and deployment workflows, improving developer productivity.",
        tags: ["Automation", "CruiseControl.NET", "DevOps"],
      },
    ],
  },
  {
    company: "Integra Connect",
    logo: IntegraLogo,
    duration: "26 Apr 2017 – 16 Jan 2020",
    projects: [
      {
        title: "Remittance Hub",
        description:
          "Engineered a complex parser to handle 835/837 files with NPI-based matching, splitting remittances for multiple practices.",
        tags: [".NET", "835/837", "Healthcare"],
      },
      {
        title: "MirthConnect HL7 Interface Engine",
        description:
          "Created and maintained MirthConnect channels to manage HL7 message exchanges with external healthcare systems.",
        tags: ["HL7", "MirthConnect", "Interfaces"],
      },
      {
        title: "EdiProjector & FileShare Services",
        description:
          "Developed services for secure file transfer, summary reporting, and remittance delivery automation.",
        tags: [".NET", "Automation", "Web Services"],
      },
    ],
  },
  {
    company: "Wells Fargo",
    logo: WellsFargoLogo,
    duration: "27 Jan 2020 – 27 Feb 2023",
    projects: [
      {
        title: "VB6 to C# Migration",
        description:
          "Migrated legacy VB6 apps to modern C# with ReactJS frontend, supporting compliance and performance goals.",
        tags: ["VB6", "C#", "ReactJS"],
      },
      {
        title: "COVID-19 Loan Amortization",
        description:
          "Developed new backend rules and frontend forms to support deferred loan payments in response to COVID-19.",
        tags: ["SSIS", ".NET", "Data Modeling"],
      },
      {
        title: "Splunk Logging Integration",
        description:
          "Integrated Splunk-based logging for exception handling and environment-specific deployments.",
        tags: ["Splunk", ".NET", "Deployment"],
      },
    ],
  },
  {
    company: "Integra Connect",
    logo: IntegraLogo,
    duration: "02 Mar 2023 – 29 Sep 2023",
    projects: [
      {
        title: "AI/ML Image Processing Interface",
        description:
          "Developed serverless architecture and AI/ML models for healthcare image processing using ReactJS front-end.",
        tags: ["ReactJS", "ML.NET", "Azure"],
      },
      {
        title: "Rewrite Monolith web app to Microservices architecture",
        description:
          "Refactored a monolith healthcare app to microservices-based architecture using Angular, Kafka, and Azure SQL backend.",
        tags: ["Angular", "Kafka", "Azure SQL"],
      },
    ],
  },
  {
    company: "Nahil Computers (Client: Cloud Solutions)",
    logo: NahilLogo,
    clientLogo: CloudSolutionsLogo,
    duration: "17 Mar 2024 – 30 Apr 2025",
    projects: [
      {
        title: "Lab Results Integration",
        description:
          "Enabled approval workflows for multi-level lab technician verification and doctor annotations in test results.",
        tags: ["Angular", ".Net Core", "Typescript", "Web API", "SQL"],
      },
      {
        title: "Cyclus HIS Billing System",
        description:
          "Led billing features, Nphies/ZATCA claim processing, Histopathology Results page with doctor inputs and multi-level approvals.",
        tags: [".NET Core", "Angular", "MongoDB", "Stimulsoft"],
      },
      {
        title: "Al-Hamra Go-Live Monitoring",
        description:
          "Managed go-live using JIRA dashboards, team reprioritization, and real-time issue resolution.",
        tags: ["Go-Live", "JIRA", "Dashboard"],
      },
    ],
  },
];

export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const reversedTimeline = [...experienceTimeline].reverse(); // ✅ move this outside JSX

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="timeline-scroll-container">
          {experienceTimeline.length > 1 && isMobile && (
            <div className="swipe-hint">
              <span className="swipe-left">←</span>
              <span className="swipe-text">Swipe to explore</span>
              <span className="swipe-right">→</span>
            </div>
          )}
          <h2 className="projects-title">💼 Work & Projects Timeline</h2>
          <div
            className={`timeline-wrapper ${
              isMobile ? "horizontal-scroll" : ""
            }`}
          >
            {reversedTimeline.map((exp, idx) => (
              <div className="timeline-entry" key={idx} data-aos="fade-up">
                <div className="company-header">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="company-logo-inline"
                  />
                  <div className="company-meta">
                    <h3 className="company-heading">{exp.company}</h3>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  {exp.clientLogo && (
                    <img
                      src={exp.clientLogo}
                      alt="Client Logo"
                      className="client-logo-inline"
                    />
                  )}
                </div>
                <div className="projects-grid">
                  {exp.projects.map((project, index) => (
                    <div
                      className="project-card"
                      key={index}
                      data-aos="fade-up"
                    >
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="tech-tags">
                            {project.tags.map((tag, tagIdx) => (
                                <span className="tech-tag" key={tagIdx}>
                                {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
