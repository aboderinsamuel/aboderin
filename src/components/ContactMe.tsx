export function ContactMe() {
  return (
    <footer
      id="contact"
      className="max-w-3xl mx-auto px-4 sm:px-8 py-12 border-t"
    >
      <h2 className="text-2xl mb-3">Contact</h2>
      <div className="space-y-2">
        <a
          href="mailto:aboderinseun01@gmail.com"
          className="text-gray-900 underline"
        >
          aboderinseun01@gmail.com
        </a>
        <div className="flex gap-4">
          <a
            href="https://github.com/aboderinsamuel"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-aboderin-0b0621271/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://codeforces.com/profile/Aboderin"
            target="_blank"
            rel="noreferrer"
          >
            Codeforces
          </a>
        </div>
      </div>
    </footer>
  );
}
