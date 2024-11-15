import { motion } from 'framer-motion';

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function ResearchCard({ title, description, image, slug }: ResearchCardProps) {
  return (
    <motion.a 
      href={`/research/${slug}`}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start border-b pb-8 sm:pb-12 cursor-pointer hover:bg-gray-50 transition-colors p-4 rounded-lg"
    >
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
      <img 
        src={image} 
        alt={title}
        className="w-full sm:w-32 h-48 sm:h-32 rounded-lg object-cover"
      />
    </motion.a>
  );
}