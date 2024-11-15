import { motion } from "framer-motion";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  active?: boolean;
  className?: string;
}

export function Link({
  href,
  children,
  external,
  active,
  className,
}: LinkProps) {
  const baseClasses = "transition-colors";
  const classes = active
    ? `${baseClasses} text-gray-900 font-medium`
    : `${baseClasses} text-gray-900 hover:text-gray-700 underline decoration-gray-300 underline-offset-4`;
  const finalClasses = className ? `${classes} ${className}` : classes;

  const content = (
    <span className="inline-flex items-center gap-1">
      {children}
      {external && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-900 font-normal"
        >
          ↗
        </motion.span>
      )}
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        className={finalClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={finalClasses}>
      {content}
    </a>
  );
}
