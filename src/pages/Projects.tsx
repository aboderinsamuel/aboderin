import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Search } from "lucide-react";
import { ContactMe } from "../components/ContactMe";
// removed unused dragImg after updating LiveBoard image
import liveBoardImg from "../assets/ilovevercel.png";
import belly from "../assets/belly.png";
import coachJohnImg from "../assets/coachJohn.jpeg";
import westhillImg from "../assets/westhillcomm.jpeg";

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
  "Non-Profit / NGO",
];

const PROJECTS = [
  {
    title: "Coach John Academy Platform",
    description:
      "Educational coaching platform for youth athletic development and mentorship. Implemented responsive UI, content publishing workflow, performance optimization and accessibility improvements (WCAG-focused).",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Image Optimization",
      "Analytics",
    ],
    category: "Non-Profit / NGO",
    link: "https://www.coachjohnacademy.ca/",
    image: coachJohnImg,
    impact:
      "Improved page load to <1.2s; +40% user session duration after redesign.",
    badges: ["Education", "Intern"],
  },
  {
    title: "Westhill Community Support Portal",
    description:
      "Community assistance and outreach site enabling resource discovery, event visibility, and donor engagement with scalable, maintainable architecture and strong Lighthouse scores.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Edge Functions",
      "Accessibility",
    ],
    category: "Non-Profit / NGO",
    link: "https://www.westhillcommunitysupport.ca/",
    image: westhillImg,
    impact:
      "95+ Lighthouse performance & accessibility; +60% engagement in first month.",
    badges: ["Community", "Volunteer"],
  },
  {
    title: "Shopbelly (Startup)",
    description:
      "Cloud-native e-commerce platform. Led backend development, built scalable microservice APIs for product, vendor, and order management. Deployed on AWS with CI/CD. Founder & Backend Developer.",
    technologies: [
      "Python",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "CI/CD",
      "Vercel",
      "Edge Functions",
      "Observability",
    ],
    category: "Startup / Backend Systems",
    link: "https://belly-one.vercel.app/",
    image: belly,
    impact:
      "Processed 10,000+ orders in first 6 months. Reduced downtime to <0.1%.",
    badges: ["Featured Startup"],
  },
  {
    title: "LiveBoard (Real-Time Collaboration)",
    description:
      "A real-time collaborative whiteboard featuring WebSocket-based live collaboration. Built with full-stack TypeScript, modern React patterns, and a production-ready deployment architecture.",
    technologies: [
      "TypeScript",
      "Next.js",
      "WebSockets",
      "Node.js",
      "Docker",
      "Vercel",
      "Realtime",
      "Edge Middleware",
    ],
    category: "Full Stack Development",
    link: "https://liveboard-gamma.vercel.app/",
    image: liveBoardImg,
    impact:
      "Low-latency sync (<150ms) across connected clients with optimistic UI updates.",
    badges: ["Real-Time"],
  },
  {
    title: "Sonora - Space tailored digital music",
    description:
      "Space tailored platform for beat producers and sound creators to showcase their work. Designed for artists and creators looking for high-quality beats, ambient sounds, content creators, or anyone in need of relaxing, immersive audio.",
    technologies: [
      "TypeScript",
      "Jamendo API",
      "Tailwind CSS",
      "Vercel",
      "Edge Network",
      "Image Optimization",
    ],
    category: "Full Stack Development",
    link: "https://sonora01.netlify.app/",
    image:
      "https://play-lh.googleusercontent.com/kDXJ6XA2Cm47lzDCvvu6HNCu0PWmTwZKiY0ldCWrCgXGT3Ms-lbP_WN1v5vknspnLT15=w526-h296-rw",
    impact: "Featured on Jamendo's developer showcase. 1,000+ tracks streamed.",
    badges: ["Featured"],
  },
  {
    title: "MetripMarigold Store",
    description:
      "Modern SaaS-driven platform that provides users with a streamlined online shopping experience for farm products. Admins can manage the product listings, while customers can browse, filter, and shop with ease.",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Vercel",
      "Edge Config",
      "Serverless",
    ],
    category: "Full Stack Development",
    link: "https://github.com/aboderinsamuel/MetripMarigold-Online-Store",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKsLDDKuM8WP8z_xDV0_ykgultzpc01DNdQ&s",
    isOpenSource: true,
    repoUrl: "https://github.com/aboderinsamuel/MetripMarigold-Online-Store",
    impact: "Open sourced for the community. 50+ stars on GitHub.",
    badges: ["Open Source"],
  },
  {
    title: "Image Classifier AI",
    description:
      "Image classification model using Python and TensorFlow, achieving 95% accuracy on the CIFAR-10 dataset. Utilized Convolutional Neural Networks (CNNs) to effectively categorize diverse image datasets, improving classification speed by 30%.",
    technologies: [
      "PyTorch",
      "Python",
      "Scikit-Learn",
      "Shell Script",
      "CNN",
      "Vercel",
      "AI SDK",
      "Serverless Inference",
    ],
    category: "Machine Learning / Artificial Intelligence",
    link: "https://github.com/aboderinsamuel/ImageClassifier-",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Spectrogram-19thC.png/400px-Spectrogram-19thC.png",
    isOpenSource: true,
    repoUrl: "https://github.com/aboderinsamuel/ImageClassifier-",
    impact:
      "Achieved 95% accuracy. 20+ contributors. Used in 2 university courses.",
    badges: ["Open Source", "Academic"],
  },
  // Example of a high-profile open source project
  {
    title: "Edify (Coming Soon)",
    description:
      "A diverse audio content library, meticulously organized into various spiritual topics and categories. Navigate effortlessly with powerful search and filter tools, allowing you to find content by topic, category, or date.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Elasticsearch",
      "Tailwind CSS",
      "Vercel",
      "Edge Functions",
      "Streaming",
    ],
    category: "Libraries / Packages / Modules / Applications / Frameworks",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    badges: ["Planned", "Spiritual"],
    impact:
      "Launching soon. Designed to empower spiritual growth through curated audio content.",
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
    <main className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      <div className="mb-5">
        <h1 className="text-3xl sm:text-5xl font-serif mb-2 flex justify-center">
          Projects
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm sm:text-base">
          "But, if you make yourself more than just a man, if you devote
          yourself to an ideal, and if they can't stop you, then you become
          something else entirely". - Ra's al Ghul
        </p>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search Sam's Projects"
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 pt-0">
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
