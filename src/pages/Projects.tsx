import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Search } from "lucide-react";
import { ContactMe } from "../components/ContactMe";
import dragImg from "../assets/drag.jpg";
import gdscImg from "../assets/gdsc.png";
import belly from "../assets/belly.png";

const CATEGORIES = [
  "All",
  "Full Stack Development",
  "Machine Learning / Artificial Intelligence",
  "Networking & Cloud Computing",
  "Algorithms / Dynamical Programming",
  "Microservice / Backend Systems",
  "Database Systems",
  "Data Analytics & PreProcessing",
  "Hardware Engineering Integrations",
  "Frontend & UI Development",
  "Libraries / Packages / Modules / Applications / Frameworks",
];

const PROJECTS = [
  {
    title: "Shopbelly (Startup)",
    description:
      "Cloud-native e-commerce platform. Led backend development, built scalable microservice APIs for product, vendor, and order management. Deployed on AWS with CI/CD. Founder & Backend Developer.",
    technologies: ["Python", "Node.js", "PostgreSQL", "Docker", "AWS", "CI/CD"],
    category: "Startup / Backend Systems",
    link: "https://belly-one.vercel.app/",
    image: belly,
  },
  {
    title: "SalesFlow Analytics",
    description:
      "Full-stack analytics dashboard with Python ETL pipelines. Deployed on AWS EC2 with Docker, reducing data latency by 85%.",
    technologies: ["Next.js", "Python", "AWS EC2", "Docker", "PostgreSQL"],
    category: "Full Stack Development",
    link: "",
    image: dragImg,
  },
  {
    title: "Inventory Management System",
    description:
      "Inventory system handling 100+ daily transactions. Deployed on AWS with CI/CD and infrastructure-as-code practices.",
    technologies: ["Next.js", "Prisma ORM", "RDS", "Amplify", "CI/CD"],
    category: "Full Stack Development",
    link: "",
    image: gdscImg,
  },
  {
    title: "Sonora - Space tailored digital music",
    description:
      "Space tailored platform for beat producers and sound creators to showcase their work. Designed for artists and creators looking for high-quality beats, ambient sounds, content creators, or anyone in need of relaxing, immersive audio.",
    technologies: ["TypeScript", "Jamendo API", "Tailwind CSS"],
    category: "Full Stack Development",
    link: "https://sonora01.netlify.app/",
    image:
      "https://play-lh.googleusercontent.com/kDXJ6XA2Cm47lzDCvvu6HNCu0PWmTwZKiY0ldCWrCgXGT3Ms-lbP_WN1v5vknspnLT15=w526-h296-rw",
  },
  {
    title: "MetripMarigold Store",
    description:
      "Modern SaaS-driven platform that provides users with a streamlined online shopping experience for farm products. Admins can manage the product listings, while customers can browse, filter, and shop with ease.",
    technologies: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
    category: "Full Stack Development",
    link: "https://github.com/aboderinsamuel/MetripMarigold-Online-Store",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKsLDDKuM8WP8z_xDV0_ykgultzpc01DNdQ&s",
  },
  {
    title: "Image Classifier AI",
    description:
      "Image classification model using Python and TensorFlow, achieving 95% accuracy on the CIFAR-10 dataset. Utilized Convolutional Neural Networks (CNNs) to effectively categorize diverse image datasets, improving classification speed by 30%.",
    technologies: ["PyTorch", "Python", "Scikit-Learn", "Shell Script", "CNN"],
    category: "Machine Learning / Artificial Intelligence",
    link: "https://github.com/aboderinsamuel/ImageClassifier-",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Spectrogram-19thC.png/400px-Spectrogram-19thC.png",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-5">
        <h1 className="text-5xl font-serif mb-2 flex justify-center">
          Projects
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          "But, if you make yourself more than just a man, if you devote
          yourself to an ideal, and if they can't stop you, then you become
          something else entirely". - Ra's al Ghul
        </p>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search Sam's Projects"
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto whitespace-nowrap">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm border rounded-full transition-colors cursor-pointer ${
              selectedCategory === category
                ? "bg-gray-900 text-white"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 pt-0">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:shadow-lg transition-shadow rounded-lg"
          >
            <ProjectCard {...project} />
          </a>
        ))}
      </div>

      <ContactMe />
    </main>
  );
}
