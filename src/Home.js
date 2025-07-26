import React from "react";
import { motion } from "framer-motion";
import ContactOverlay from "./Components/Contact/ContactOverlay";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <motion.section
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold text-blue-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Kumar Chandra
        </motion.h1>

        <motion.h2
          className="text-xl text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Senior Technical Project Manager
        </motion.h2>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Project & Technical Manager with 14+ years’ experience leading
          software delivery, project governance, and cross-functional teams
          across healthcare and financial sectors. Certified in Prince2
          Foundation and Azure Fundamentals. Proven track record in resource
          planning, stakeholder engagement, and Agile-driven project execution.
        </motion.p>

        {/* Key Skills */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Key Skills
          </h3>
          <ul className="list-disc list-inside">
            <li>Agile Project Management, JIRA, Confluence, CI/CD</li>
            <li>.NET Core, Angular, Node.js, React.js</li>
            <li>SQL Server, MongoDB, Microservices Architecture</li>
            <li>HL7, FHIR, MirthConnect, Healthcare Systems</li>
          </ul>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Featured Projects
          </h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Cyclus HIS Billing System:</strong> Led end-to-end
              delivery, claim management with Nphies using .NET Core and
              MongoDB.
            </li>
            <li>
              <strong>HL7 Mirth Integration:</strong> Ensured
              standards-compliant messaging pipelines using Kafka and
              MirthConnect.
            </li>
            <li>
              <strong>Legacy Migration for Wells Fargo:</strong> Migrated VB6 to
              C# and modernized legacy web applications using ReactJS and .NET
              Core.
            </li>
          </ul>
        </motion.section>

        {/* Certifications */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Certifications
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Prince2 Foundation – Project Management (PeopleCert, Sep 2022)
            </li>
            <li>Microsoft Certified: Azure Fundamentals – AZ900 (Sep 2022)</li>
          </ul>
        </motion.section>
        {/* Contact */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Contact</h3>
          <ContactOverlay />

          <p>
            Phone:{" "}
            <a className="text-blue-600 underline" href="tel:+919980533965">
              +91 99805 33965
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              className="text-blue-600 underline"
              href="https://linkedin.com/in/kumar-chandra-iima"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/kumar-chandra-iima
            </a>
          </p>
          <p className="mt-4">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
            >
              📄 Download Resume
            </a>
          </p>
        </motion.section>
      </motion.section>
    </main>
  );
}
