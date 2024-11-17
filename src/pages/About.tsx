import { ContactMe } from "../components/ContactMe";
import comp from "../assets/comp.jpg";
import { Link } from "react-router-dom"; // Import Link

export function About() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif mb-8 flex justify-center">
        Samuel Aboderin Oluwaseun
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <img
            src={comp}
            alt="Profile"
            className="rounded-lg w-full h-[200px] md:h-[200px] lg:h-[500px] object-cover"
          />
          <p className="text-sm text-gray-500 mt-2">Hardware</p>
        </div>
        <div className="space-y-6">
          <p className="text-lg">
            I'm a Software Engineer with a background in Computer Engineering. I
            am currently an undergraduate student at the University of Lagos,
            pursuing a bachelors degree in Computer Engineering. Personally, i
            focus on Software Enineering with/and Artificial Intelligence.
          </p>
          <p className="text-lg">
            Presently, I mainly work with Core Frontend and Backend Systems
            (API/MicroServices/DB).
          </p>
          <p className="text-lg">
            Another of many technical skillsets is Fullstack Development -
            (Frontend + Backend, Python, Java & C++) - creating impressive (UI),
            Fast (Performance) and Scalable (Backend) applications, some even
            integrated with machine learning systems.
          </p>
          <p className="text-lg">
            Big fan of opensource development, I have built several libraries,
            modules, packages & tools, in database, algorithms, web-frameworks &
            machine learning/ai fields all opensourced{" "}
            <a
              href="https://github.com/aboderinsamuel
"
              className="text-blue-600 hover:underline"
            >
              GitHub @aboderinsamuel
            </a>
          </p>
          <p className="text-lg">die hard Arsenal fan 😶‍🌫️</p>
          <Link
            to="/research"
            className="inline-block mt-4 px-6 py-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Research ↗
          </Link>
        </div>
      </div>
      <ContactMe />
    </main>
  );
}
