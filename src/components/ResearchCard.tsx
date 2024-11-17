interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function ResearchCard({ title, description, image }: ResearchCardProps) {
  return (
    <div 
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-b pb-6 sm:pb-8 p-4 rounded-md"
    >
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-medium mb-3">{title}</h2>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
      <img 
        src={image} 
        alt={title}
        className="w-full sm:w-28 h-40 sm:h-28 rounded-lg object-cover"
      />
    </div>
  );
}
