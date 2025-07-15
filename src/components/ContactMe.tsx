export function ContactMe() {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 border-t">
      <h2 className="text-2xl font-serif mb-4">Contact Me.</h2>
      <div className="space-y-4 sm:space-y-0">
        <p className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
          <span>Reach out to me</span>
          <span className="flex gap-2 flex-wrap">
            <span className="hidden sm:inline">·</span>
            <a href="mailto:aboderinseun01@gmail.com" className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-gray-700">aboderinseun01@gmail.com</a>
          </span>
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/aboderinsamuel" className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-gray-700">GitHub</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/samuel-aboderin-0b0621271/" className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-gray-700">LinkedIn</a>
          <span>·</span>
          <a href="https://twitter.com/" className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-gray-700">Twitter</a>
        </div>
      </div>
    </footer>
  );
}