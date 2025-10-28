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

      {/* Experience first */}
      {/* Experience list */}
      <section className="space-y-2 mb-12">
        <h2 className="text-2xl">Experience</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Shopbelly</span> — Founder & Backend ·
            2025–2025
            <div className="text-sm">
              Cloud‑native commerce; Python/Node, PostgreSQL, Docker, AWS.
            </div>
          </li>
          <li>
            <span className="font-medium">Westhill Community Support</span> —
            Frontend/Platform · 2025–2025
            <div className="text-sm">
              Next.js/React, IA/accessibility, deployment & monitoring.
            </div>
          </li>
          <li>
            <span className="font-medium">Coach John</span> — Full‑Stack ·
            2025–2025
            <div className="text-sm">
              LMS on React + Python; AWS, Docker, CI/CD.
            </div>
          </li>
          <li>
            <span className="font-medium">Marigold Signature</span> — SWE Intern
            · 2023–2024
            <div className="text-sm">
              Node.js/PostgreSQL; auth, payments, testing, monitoring.
            </div>
          </li>
          <li>
            <span className="font-medium">GDSC Unilag</span> — Frontend Engineer
            · 2023–2023
            <div className="text-sm">
              Community projects, workshops and hackathons.
            </div>
          </li>
        </ul>
      </section>

      {/* Flip-cards removed per request */}
      {/* Full projects list */}
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
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="space-y-3 mb-12">
        <h2 className="text-2xl">Technical Skills</h2>
        <div className="space-y-2 text-gray-700">
          <div>
            <span className="font-medium">Languages:</span> Python, C++, Java,
            SQL, TypeScript
          </div>
          <div>
            <span className="font-medium">AI/ML:</span> PyTorch, TensorFlow,
            scikit‑learn
          </div>
          <div>
            <span className="font-medium">Frameworks/Tools:</span> Docker, AWS
            (EC2, S3), Node.js, React, Jenkins, Git, PostgreSQL, Terraform,
            Redis
          </div>
          <div>
            <span className="font-medium">Concepts:</span> Cloud Architecture,
            Microservices, Data Pipelines, Distributed Systems, Agile, CI/CD,
            Automated Testing
          </div>
          <div>
            <span className="font-medium">Quant:</span> Market microstructure,
            risk, time series, small simulations in Python; probability and
            implementation speed practice
          </div>
          <div>
            <span className="font-medium">Competitions:</span> Codeforces,
            Kaggle, LeetCode
          </div>
        </div>
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
