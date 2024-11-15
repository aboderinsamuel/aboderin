import { motion } from "framer-motion";
import { Link } from "../components/Link";
import { ContactMe } from "../components/ContactMe";
import { MicrosoftIcon } from "../components/icons/Microsoft";
import pic from "../assets/pic.jpg";

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
                Personal Research@{" "}
                <Link
                  href="https://medium.com/@aboderinseun01"
                  external
                  className="text-blue-500 bg-amber-50 font-medium"
                >
                  medium
                </Link>{" "}
                (ML + Data with Python)@{" "}
                <Link
                  href="https://github.com/aboderinsamuel"
                  external
                  className="text-blue-500 bg-amber-50 font-medium"
                >
                  Udacity
                </Link>{" "}
                SWE Intern.@{" "}
                <Link
                  href="https://www.marigoldsignatureng.com/"
                  external
                  className="text-blue-500 bg-amber-50 font-medium"
                >
                  Marigold Signature
                </Link>{" "}
                Frontend Eng.@{" "}
                <Link
                  href="https://gdg.community.dev/gdg-on-campus-university-of-lagos-lagos-nigeria/"
                  external
                  className="text-blue-500 bg-amber-50 font-medium"
                >
                  @Google Developers Student Club Unilag
                </Link>{" "}
                3D design Enthusiast @{" "}
                <Link
                  href="https://threejs.org/"
                  external
                  className="text-blue-500 bg-amber-50 font-medium"
                >
                  three.js
                </Link>
                .
              </p>
              <p>
                Software Engineer - Building Frontend Apps, Backend +
                Infrastructure Systems & ML Architectures + Models (Light Work).
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
                <p className="text-sm sm:text-base text-gray-600">
                  Deep dive into my ML research and implementations
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
                  <p className="text-sm sm:text-base text-gray-600">
                    Professional achievements and contributions
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
                <p className="text-sm sm:text-base text-gray-600">
                  Explore my software development projects and contributions
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>
      <ContactMe />
    </motion.main>
  );
}
