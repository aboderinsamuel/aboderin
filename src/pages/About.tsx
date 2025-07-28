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
            I'm a Computer Engineering student, software engineer, and
            entrepreneur passionate about building scalable web applications and
            cloud-native systems. Founder of Shopbelly, an e-commerce startup,
            and experienced in backend, DevOps, and cloud computing.
          </p>
          <p className="text-lg">
            Technical skills: Python, JavaScript/TypeScript, Node.js, Spring
            Boot, AWS, Docker, PostgreSQL, MongoDB, CI/CD, Linux.
          </p>
          <p className="text-lg">
            Leadership & Startup: Founded and led Shopbelly, designing and
            deploying scalable backend services and microservice APIs on AWS.
            Experienced in agile, DevOps, and open-source contributions.
          </p>
          <p className="text-lg">
            Open-source developer and active tech community member.
          </p>
          <p className="text-lg">die hard Arsenal fan 😶‍🌫️</p>
          <Link
            to="/experience"
            className="inline-block mt-4 px-6 py-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Experience ↗
          </Link>
        </div>
      </div>
      <ContactMe />
    </main>
  );
}
