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
    <div className="group border border-gray-200 rounded-xl p-6 h-full min-h-[520px] flex flex-col bg-white shadow-sm hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-sm text-gray-600">{category}</span>
            {isOpenSource && (
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                Open Source
              </span>
            )}
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold"
              >
                {badge}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-serif mb-1 flex items-center gap-2 break-words">
            {title}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Repository"
              >
                <FaGithub className="inline w-5 h-5 text-gray-600 hover:text-black transition-colors" />
              </a>
            )}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      </div>

      <div className="relative h-60 mb-5 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center ring-1 ring-gray-200 group-hover:ring-gray-300 transition-all">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-gray-500 text-sm">
            No Image Available
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {impact && (
        <div className="mb-2 text-xs text-indigo-700 font-semibold italic break-words">
          {impact}
        </div>
      )}

      <p className="text-gray-600 mb-4 leading-relaxed text-sm break-words">
        {description.length > 170
          ? `${description.slice(0, 170)}...`
          : description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
      {technologies.includes("Vercel") && (
        <div className="mt-3 text-[11px] text-gray-500 font-medium tracking-wide">
          Built & optimized for Vercel Platform (Edge Functions · ISR · Edge
          Network)
        </div>
      )}
    </div>
  );
}
