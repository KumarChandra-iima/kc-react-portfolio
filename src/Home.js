import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Kumar Chandra</h1>
        <h2 className="text-xl text-gray-600 mb-4">
          Senior Technical Project Manager
        </h2>
        <p className="mb-6">
          Project & Technical Manager with 14+ years’ experience leading
          software delivery, project governance, and cross-functional teams
          across healthcare and financial sectors. Certified in Prince2
          Foundation and Azure Fundamentals. Proven track record in resource
          planning, stakeholder engagement, and Agile-driven project execution.
        </p>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Key Skills
          </h3>
          <ul className="list-disc list-inside">
            <li>Agile Project Management, JIRA, Confluence, CI/CD</li>
            <li>.NET Core, Angular, Node.js, React.js</li>
            <li>SQL Server, MongoDB, Microservices Architecture</li>
            <li>HL7, FHIR, MirthConnect, Healthcare Systems</li>
          </ul>
        </section>

        <section className="mb-8">
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
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Certifications
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Prince2 Foundation – Project Management (PeopleCert, Sep 2022)
            </li>
            <li>Microsoft Certified: Azure Fundamentals – AZ900 (Sep 2022)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Contact</h3>
          <p>
            Email:{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:iima.kumarchandra@gmail.com"
            >
              iima.kumarchandra@gmail.com
            </a>
          </p>
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
            >
              linkedin.com/in/kumar-chandra-iima
            </a>
          </p>
        </section>
      </section>
    </main>
  );
}
