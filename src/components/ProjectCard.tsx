interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}