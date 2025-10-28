import { motion } from "framer-motion";
import { ContactMe } from "../components/ContactMe";

export function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto px-4 sm:px-8 py-16"
    >
      <section className="mb-20">
        <h1 className="text-4xl sm:text-5xl mb-6">ml · swe · quant</h1>
        <p className="text-lg text-gray-600 mb-10">
          I build backend systems and study markets. I prefer simple designs,
          careful testing, and clear interfaces.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl">Selected work</h2>
          <ul className="space-y-3">
            <li>
              <a href="/me" className="text-gray-900 underline">
                Me
              </a>
            </li>
            <li>
              <a
                href="https://belly-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 underline"
              >
                Shopbelly — founder, backend
              </a>
            </li>
            <li>
              <a
                href="https://www.coachjohnacademy.ca/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 underline"
              >
                Coach John — full‑stack
              </a>
            </li>
            <li>
              <a
                href="https://liveboard-gamma.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 underline"
              >
                LiveBoard — realtime
              </a>
            </li>
          </ul>
        </div>
      </section>

      <ContactMe />
    </motion.main>
  );
}
