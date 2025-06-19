import { motion } from "framer-motion";
import { Link } from "../components/Link";
import { ContactMe } from "../components/ContactMe";
import { MicrosoftIcon } from "../components/icons/Microsoft";
import pic from "../assets/pic.jpg";
import cart from "../assets/cart.avif";

export function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12"
    >
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-serif mb-6 sm:mb-8">
              Pushing Machines to Brilliance.
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-gray-600">
              <p>
                <span className="font-semibold">Technical Skills:</span> Python,
                Java, JavaScript, TypeScript, SQL, C++, Go (basic), Node.js,
                Spring Boot, REST APIs, AWS (EC2, S3, RDS), Docker, CI/CD,
                PostgreSQL, MongoDB, MySQL, Linux, Git, Agile.
              </p>
              <p>
                <span className="font-semibold">Startup Founder:</span> Built{" "}
                <a
                  href="https://shopbelly.vercel.app/"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shopbelly
                </a>
                , a cloud-native e-commerce platform with Python/Node.js and
                AWS.
              </p>
              <p className="hidden sm:block">
                <span className="font-semibold">Professional Experience:</span>{" "}
                Full-Stack Developer at Coach John (React, Python, AWS, Docker).
                SWE Intern at Marigold Signature (Node.js, PostgreSQL, CI/CD).
              </p>
              <p className="italic">
                The only way to do great work is to love what you do.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img
              src={pic}
              alt="Samuel Aboderin"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 space-y-6"
        >
          <h2 className="text-2xl font-medium mb-4">Portfolio & Writing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Link href="https://medium.com/@aboderinseun01" external>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 border rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  Medium Blog
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Technical articles and insights
                </p>
              </motion.div>
            </Link>
            <Link href="https://github.com/aboderinsamuel" external>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 border rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  Machine Learning
                </h3>
                <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
                  Deep dive into my ML experience and implementations
                </p>
                <p className="text-sm sm:text-base text-gray-600 sm:hidden">
                  ML projects and implementations
                </p>
              </motion.div>
            </Link>
            <Link href="https://microsoft.com/" external>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 border rounded-lg hover:shadow-lg transition-all flex items-center gap-4"
              >
                <MicrosoftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    Microsoft Profile
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
                    Professional achievements and contributions
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 sm:hidden">
                    Professional work
                  </p>
                </div>
              </motion.div>
            </Link>
            <Link href="https://samfrontend.vercel.app/" external>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 border rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  3D Portfolio
                </h3>
                <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
                  Explore my software development projects and contributions
                </p>
                <p className="text-sm sm:text-base text-gray-600 sm:hidden">
                  3D software projects
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <div className="p-6 border rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 bg-white">
          <img
            src={cart}
            alt="Shopbelly Startup"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Shopbelly (Startup)</h2>
            <p className="mb-2">
              Cloud-native e-commerce platform. Designed and deployed scalable
              backend services and microservice APIs on AWS.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs">
                Python
              </span>
              <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs">
                Node.js
              </span>
              <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs">
                PostgreSQL
              </span>
              <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs">
                Docker
              </span>
              <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs">
                AWS
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <ContactMe />
    </motion.main>
  );
}
