import { motion } from "framer-motion";
import { ExperienceCard } from "../components/ResearchCard";
import { ContactMe } from "../components/ContactMe";
import { useEffect } from "react";
import startUpLogo from "../assets/cart.avif";
import coachJ from "../assets/coachJ.jpg";
import rigold from "../assets/rigold.png";
import gdscLogo from "../assets/gdsc.png";

export function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const experiences = [
    {
      company: "Shopbelly (Startup)",
      role: "Founder & Backend Developer",
      period: "Jan 2025 – Present | Lagos, Nigeria",
      description:
        "Founded and led the design and backend development of a cloud-native e-commerce platform. Built backend services with Python/Node.js, PostgreSQL, and Docker; deployed on AWS using CI/CD. Implemented scalable microservice APIs for product, vendor, and order management.",
      logo: startUpLogo,
    },
    {
      company: "Coach John",
      role: "Full-Stack Developer",
      period: "Apr 2025 – Present | Remote (Canada)",
      description:
        "Built a React-based LMS with Python & PostgreSQL backend for 1,000+ learners; deployed via AWS and Docker. Managed deployments and rollbacks with AWS Amplify and CI/CD pipelines. Led sprint planning and retrospectives in an agile team.",
      logo: coachJ,
    },
    {
      company: "Marigold Signature",
      role: "Software Engineering Intern",
      period: "Oct 2023 – Dec 2024 | Lagos, Nigeria",
      description:
        "Developed full-stack applications with Node.js and PostgreSQL, focusing on authentication and payments. Integrated automated testing and monitoring for system reliability. Collaborated in biweekly sprints using JIRA, Git, and agile methodologies.",
      logo: rigold,
    },
    {
      company: "Google Developer Student Club (GDSC) Unilag",
      role: "Frontend Engineer",
      period: "2023 – Present | Lagos, Nigeria",
      description:
        "Built and maintained web applications for the student developer community. Organized and led technical workshops and hackathons.",
      logo: gdscLogo,
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-serif mb-6 flex justify-center">
          Experience
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center">
          My professional and leadership journey across startups, internships,
          and developer communities.
        </p>
      </div>
      <div className="space-y-6 sm:space-y-10">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
      <ContactMe />
    </motion.main>
  );
}
