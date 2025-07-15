interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  logo,
}: ExperienceCardProps) {
  return (
    <div className="flex items-start gap-4 border-b pb-6 p-4 rounded-md">
      <img
        src={logo}
        alt={company + " logo"}
        className="w-12 h-12 rounded object-contain border bg-white flex-shrink-0 mt-1"
      />
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
          <span className="font-semibold text-lg">{company}</span>
          <span className="text-gray-500 text-sm">{role}</span>
          <span className="text-gray-400 text-xs">{period}</span>
        </div>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}
