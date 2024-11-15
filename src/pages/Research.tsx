import { motion } from 'framer-motion';
import { ResearchCard } from '../components/ResearchCard';
import { ContactMe } from '../components/ContactMe';

interface ResearchProject {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function Research() {
  const projects: ResearchProject[] = [
    {
      title: "Dynamic Systems Modeling of Disease Propagation: Stochastic Network Processes with Differential Equation and Network Graph Theory",
      description: "Leveraged stochastic processes on networks using differential equations to determine disease susceptibility rates and recovery probabilities, employing sophisticated mathematical and epidemiological models for better analysis and modeling of infectious diseases spread.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=200&h=200&q=80",
      slug: "disease-propagation"
    },
    {
      title: "Mini-Batch R-index (MBRI): Spectral Decomposition algorithm for Fine-Tuning Machine Learning Model Optimizations & Multicollinearity handling in ML Models.",
      description: "Developed a Spectral Decomposition-based algorithm integrating filter-wrapper techniques with feature clustering, utilizing the Rand Index cluster metric for enhanced selection precision. Employing multi-processing and parallel programming for high performance computational efficiency, rendering it ideal for real-world predictive models.",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=200&h=200&q=80",
      slug: "mbri-algorithm"
    },
    {
      title: "Radio Frequency-Enabled Camera System (Image Manipulation + Rendering) for Launch Vehicle",
      description: "Developed payload system for an automated radio frequency-enabled camera aboard a NASA USU launch vehicle (sub-scale rocket), operating at an altitude of 6000 ft. Using demodulated telecommand signals from a SDR receiver, the system efficiently executes image processing operations with custom functions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&h=200&q=80",
      slug: "rf-camera-system"
    }
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
        <h1 className="text-6xl  font-serif mb-4 flex justify-center">Research</h1>
        <p className="text-base sm:text-lg text-gray-600">
          Versatile when it comes to research - primary focus on Core ML, Reinforcement & Deep Learning Models - but I use my technical prowess to solve problems in the Software and Computer Engineering field.
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