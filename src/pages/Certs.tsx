import { motion } from "framer-motion";
import { ContactMe } from "../components/ContactMe";
import { FiDownload } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import nvidiaLogo from "../assets/NVIDIA_Logo_2.webp";

import udacityLogo from "../assets/Udacity_idv8deX8Il_1.png";
import stanfordLogo from "../assets/Stanford University_idhFYX4xx8_1.png";
import deeplearningLogo from "../assets/DeepLearning.AI_idehB-9oh8_1.png";
import bertelsmannLogo from "../assets/Bertelsmann_idKRKxX-nr_1.png";

const CERTIFICATES = [
  {
    title: "Accelerating Data Engineering Pipelines",
    issuer: "NVIDIA",
    logo: nvidiaLogo,
    logoAlt: "NVIDIA logo",
    download: "/certs/nvidia-data-engineering.pdf",
    credentialUrl: "https://learn.nvidia.com/certificates?id=mt467AVmShubhwUBXy0XZg#",
    description: "Optimized and accelerated data pipelines for machine learning workflows, focusing on GPU acceleration and scalability.",
    credentialId: "",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    logo: nvidiaLogo,
    logoAlt: "NVIDIA logo",
    download: "/certs/nvidia-deep-learning.pdf",
    credentialUrl: "https://learn.nvidia.com/certificates?id=SwkcQWZxSAS7OkAQvNbvlA#",
    description: "Built and deployed deep learning models (CNNs, RNNs) on GPU hardware for image and sequence data.",
    credentialId: "",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Stanford Online & DeepLearning.AI",
    logo: stanfordLogo,
    logoAlt: "Stanford University logo",
    download: "/certs/advanced-learning-algorithms.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/MG0VGZUZVSFD",
    description: "Mastered advanced supervised, unsupervised, and reinforcement learning techniques through hands-on projects and real-world case studies.",
    credentialId: "",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Stanford Online & DeepLearning.AI",
    logo: deeplearningLogo,
    logoAlt: "DeepLearning.AI logo",
    download: "/certs/unsupervised-learning.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/LB56UBHVUSBH",
    description: "Applied clustering, dimensionality reduction, anomaly detection, recommender systems, and reinforcement learning to real datasets.",
    credentialId: "",
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "Stanford Online & DeepLearning.AI",
    logo: stanfordLogo,
    logoAlt: "Stanford University logo",
    download: "/certs/supervised-ml.pdf",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/LZEW409EGA1K",
    description: "Developed and evaluated regression and classification models for real-world business and research problems.",
    credentialId: "",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online & DeepLearning.AI",
    logo: stanfordLogo,
    logoAlt: "Stanford University logo",
    download: "",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/4XP6LOLME5CU",
    description: "Comprehensive specialization covering supervised, unsupervised, and advanced ML topics with hands-on projects.",
    credentialId: "",
  },
  {
    title: "Generative AI",
    issuer: "Bertelsmann Tech Booster Scholarship",
    logo: bertelsmannLogo,
    logoAlt: "Bertelsmann logo",
    download: "/certs/bertelsmann-generative-ai.pdf",
    credentialUrl: "",
    description: "Explored generative models (GANs, VAEs) and prompt engineering for creative AI applications.",
    credentialId: "",
  },
  {
    title: "AI Programming with Python",
    issuer: "Udacity",
    logo: udacityLogo,
    logoAlt: "Udacity logo",
    download: "/certs/udacity-ai-python.pdf",
    credentialUrl: "https://confirm.udacity.com/e/0dbd584a-0ae8-11ee-b4fb-a7c1f02b2eef",
    description: "Developed AI solutions using Python, NumPy, Pandas, and neural networks. Completed a capstone AI project.",
    credentialId: "",
  },
];

export function Certs() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-serif mb-6 text-center">My Certifications & Lifelong Learning</h1>
        <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
          I’m passionate about mastering the latest in machine learning, AI, and data engineering. Each certificate below represents not just a course completed, but real-world skills applied to projects and challenges. I believe in continuous learning and strive to bring cutting-edge solutions to every team I join.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {CERTIFICATES.map((cert, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow p-6 min-h-[240px]"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={cert.logo}
                alt={cert.logoAlt}
                className="w-16 h-16 object-contain rounded-lg bg-gray-50 border shadow-md"
              />
              <div>
                <h2 className="text-lg font-bold font-serif text-gray-900 leading-tight mb-1">{cert.title}</h2>
                <p className="text-xs text-gray-500 font-medium">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mb-4 flex-1">{cert.description}</p>
            {cert.credentialId && (
              <span className="text-xs text-gray-400 mb-2">Credential ID: {cert.credentialId}</span>
            )}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-700 underline hover:text-blue-900 transition-colors ml-1"
              >
                View Credential <FiExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>
      <ContactMe />
    </motion.main>
  );
} 