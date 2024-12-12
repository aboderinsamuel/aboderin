import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  technologies,
}: Project) {
  return (
    <div className="group border border-gray-600 rounded-lg p-3 h-[420px] transition-all hover:border-gray-800">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-sm text-gray-600 mb-1">{category}</div>
          <h3 className="text-xl font-serif mb-1 transition-colors">
            {title}
          </h3>
        </div>
        <ArrowUpRight className="w-4 h-4 text-gray-400 transition-colors" />
      </div>

      <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-3">
        {description.length > 150
          ? `${description.slice(0, 150)}...`
          : description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
