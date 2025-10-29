import { motion } from "framer-motion";
import { ContactMe } from "../components/ContactMe";
// Removed flip-card screenshots and related imports

export function Me() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="max-w-3xl mx-auto px-4 sm:px-8 py-16"
    >
      <h1 className="text-4xl sm:text-5xl mb-8">Experience & Projects</h1>

      {/* Experience */}
      <section className="space-y-2 mb-12">
        <h2 className="text-2xl">Experience</h2>
        <div className="text-gray-700 space-y-6">
          <div>
            <div className="font-medium">
              Coach John — Software & Data Engineer Intern
            </div>
            <div className="text-sm text-gray-600">
              Leadership & Community Engagement Initiative · June 2025 – August
              2025 · Remote (Toronto, Canada)
            </div>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>
                Collaborated in a multicultural Agile team to re-architect a
                cloud analytics platform; doubled system uptime and improved
                mentor access for 30+ users.
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium">
              Acway Alliance — Data Engineer Intern
            </div>
            <div className="text-sm text-gray-600">
              February 2025 – April 2025 · Remote (Toronto, Canada)
            </div>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>
                Developed PostgreSQL ETL pipelines, enabling analysis of 10K+
                project records for impact evaluation across international NGO
                teams.
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium">
              Marigold Signature — Backend Engineer Intern
            </div>
            <div className="text-sm text-gray-600">
              November 2023 – December 2023 · Lagos, Nigeria
            </div>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>
                Championed end-to-end error tracking, decreasing bug-fix time
                and enhancing customer trust through stable releases.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-2 mb-8">
        <h2 className="text-2xl">Education</h2>
        <div className="text-gray-700">
          <div className="font-medium">
            University of Lagos Akoka, Lagos, Nigeria
          </div>
          <div>
            BSc. Computer Engineering
          </div>
          <div className="text-sm">January 2022 – May 2027 (Expected)</div>
          <div className="text-sm mt-2">
            <span className="font-medium">Relevant Coursework:</span> Data
            Structures & Algorithms, Distributed Systems, Operating Systems,
            Computer Networks, Computer Architecture, Machine Learning,
            Financial Engineering
          </div>
        </div>
      </section>

      {/* Technical Skills (compact) */}
      <section className="space-y-3 mb-10">
        <h2 className="text-2xl">Technical Skills</h2>
        <div className="text-gray-700 text-sm space-y-1">
          <div>
            <span className="font-medium">Languages:</span> Python · C++ · Java
            · SQL · TypeScript
          </div>
          <div>
            <span className="font-medium">AI / ML:</span> PyTorch · TensorFlow ·
            scikit-learn
          </div>
          <div>
            <span className="font-medium">Tools:</span> Docker · AWS · Node.js ·
            React · Git · PostgreSQL · Redis · Terraform
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-2 mb-10">
        <h2 className="text-2xl">Projects</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <a
              href="https://belly-one.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Shopbelly — founder, backend
            </a>
          </li>
          <li>
            <a
              href="https://www.coachjohnacademy.ca/"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Coach John — full‑stack
            </a>
          </li>
          <li>
            <a
              href="https://liveboard-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              LiveBoard — realtime
            </a>
          </li>
          <li>
            <a
              href="https://www.westhillcommunitysupport.ca/"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Westhill Community — frontend/platform
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aboderinsamuel/MetripMarigold-Online-Store"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              MetripMarigold Store — full‑stack
            </a>
          </li>
          <li>
            <a
              href="https://sonora01.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Sonora — audio platform
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aboderinsamuel/ImageClassifier-"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Image Classifier — ML
            </a>
          </li>
        </ul>
      </section>

      {/* Awards & Leadership */}
      <section className="space-y-2 mb-10">
        <h2 className="text-2xl">Awards & Leadership</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <span className="font-medium">
              1st Runner-Up, ACM Africa Creative Market Hackathon (Team Jara,
              2025)
            </span>{" "}
            — ₦1,000,000 & $5,000 AWS. Built an AI‑powered platform transforming
            creative industry distribution, collaborating across 5+ countries.
          </li>
          <li>
            <span className="font-medium">Gold — High School Chess</span> —
            Inter-house Sports.
          </li>
        </ul>
      </section>

      {/* Volunteering */}
      <section className="space-y-2 mb-10">
        <h2 className="text-2xl">Volunteering</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Westhill Community Support</span> —
            Frontend/Platform · 2025–Now
            <div className="text-sm">
              Next.js/React, IA/accessibility, deployment & monitoring.
            </div>
          </li>
          <li>
            <span className="font-medium">GDSC Unilag</span> — Frontend Engineer
            · 2023–Now
            <div className="text-sm">
              Community projects, workshops and hackathons.
            </div>
          </li>
          <li>
            <span className="font-medium">Cleva</span> — Campus Ambassador ·
            ongoing
            <div className="text-sm">
              Campus outreach and student engagement for Cleva's fintech
              programs.
            </div>
          </li>
          <li>
            <span className="font-medium">Cowrywise</span> — Campus Ambassador ·
            ongoing
            <div className="text-sm">
              Promote financial literacy and product adoption among students.
            </div>
          </li>
        </ul>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-2xl">Links</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <a href="/credentials" className="underline text-gray-900">
              Credentials
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aboderinsamuel"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://codeforces.com/profile/Aboderin"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Codeforces
            </a>
          </li>
        </ul>
      </section>

      <ContactMe />
    </motion.main>
  );
}
