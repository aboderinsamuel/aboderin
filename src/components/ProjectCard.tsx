import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  isOpenSource?: boolean;
  repoUrl?: string;
  badges?: string[];
  impact?: string;
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  technologies,
  isOpenSource = false,
  repoUrl,
  badges = [],
  impact,
}: Project) {
  return (
    <div className="group border border-black rounded-lg p-4 h-full min-h-[440px] flex flex-col justify-between bg-white shadow-md transition-all overflow-hidden">
      <div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-sm text-gray-600">{category}</span>
              {isOpenSource && (
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">Open Source</span>
              )}
              {badges.map((badge) => (
                <span key={badge} className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">{badge}</span>
              ))}
            </div>
            <h3 className="text-xl font-serif mb-1 transition-colors flex items-center gap-2 break-words">
              {title}
              {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" title="View Repository">
                  <FaGithub className="inline w-5 h-5 text-gray-700 hover:text-black transition-colors" />
                </a>
              )}
            </h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-400 transition-colors" />
        </div>

        <div className="relative h-40 mb-3 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center rounded-lg"
              style={{ maxHeight: '160px', maxWidth: '100%' }}
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        {impact && (
          <div className="mb-2 text-xs text-indigo-700 font-semibold italic break-words">{impact}</div>
        )}

        <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-3 break-words">
          {description.length > 150
            ? `${description.slice(0, 150)}...`
            : description}
        </p>

        <div className="flex flex-wrap gap-2 mb-2">
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
    </div>
  );
}
