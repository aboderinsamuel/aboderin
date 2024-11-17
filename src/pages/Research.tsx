import { useEffect } from "react";
import { motion } from "framer-motion";
import { ResearchCard } from "../components/ResearchCard";
import { ContactMe } from "../components/ContactMe";

export function Research() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const projects = [
    {
      title: "Dynamic Systems Modeling of Disease Propagation",
      description: "Leveraged stochastic processes...",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=200&h=200&q=80",
      slug: "disease-propagation",
    },
    {
      title: "Mini-Batch R-index (MBRI): Spectral Decomposition algorithm",
      description: "Developed a Spectral Decomposition-based algorithm...",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=200&h=200&q=80",
      slug: "mbri-algorithm",
    },
    {
      title: "Radio Frequency-Enabled Camera System",
      description: "Developed payload system for an automated radio frequency-enabled camera...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&h=200&q=80",
      slug: "rf-camera-system",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12"
    >
      <div className="mb-12">
        <h1 className="text-6xl font-serif mb-4 flex justify-center">
          Research
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Versatile when it comes to research...
        </p>
      </div>
      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => (
          <ResearchCard key={index} {...project} />
        ))}
      </div>
      <ContactMe />
    </motion.main>
  );
}
