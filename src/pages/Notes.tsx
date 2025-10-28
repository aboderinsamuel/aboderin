import { motion } from "framer-motion";
import { ContactMe } from "../components/ContactMe";

export function Notes() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="max-w-3xl mx-auto px-4 sm:px-8 py-16"
    >
      <h1 className="text-4xl sm:text-5xl mb-8">Notes</h1>

      <section className="space-y-6 mb-12">
        <h2 className="text-2xl">Quant focus</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Probabilistic modeling, time series, statistical learning</li>
          <li>Derivatives: pricing intuition, Greeks, risk decomposition</li>
          <li>Market microstructure, order books, execution quality</li>
          <li>Backtesting pitfalls: leakage, slippage, regime shifts</li>
          <li>Tooling: Python, NumPy/pandas, JAX/PyTorch, basic C++</li>
        </ul>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-2xl">Selected projects</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <a
              href="https://liveboard-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              LiveBoard
            </a>
            <span className="text-gray-600">
              {" "}
              — realtime collaboration, optimistic UI
            </span>
          </li>
          <li>
            <a
              href="https://github.com/aboderinsamuel/ImageClassifier-"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Image Classifier (repo)
            </a>
            <span className="text-gray-600"> — CNN pipeline, evaluation</span>
          </li>
          <li>
            <a
              href="https://belly-one.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-900"
            >
              Shopbelly
            </a>
            <span className="text-gray-600"> — backend services, AWS</span>
          </li>
        </ul>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-2xl">Short write‑ups</h2>
        <ul className="space-y-2">
          <li>
            <details>
              <summary className="cursor-pointer underline">
                Order book simulation — minimal model
              </summary>
              <p className="text-gray-700 mt-2">
                Simple limit/market order process to study spread dynamics and
                fill probabilities. Focus on correctness, latency, and
                instrumentation over fancy visuals.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary className="cursor-pointer underline">
                Risk budget with Kelly (practical constraints)
              </summary>
              <p className="text-gray-700 mt-2">
                Fractional Kelly under estimation error and fat tails. Emphasis
                on capped exposure and drawdown limits instead of point
                estimates.
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary className="cursor-pointer underline">
                A tiny backtesting checklist
              </summary>
              <p className="text-gray-700 mt-2">
                Train/test splits by regime, robust baselines, transaction
                costs, borrow/fees, and out‑of‑sample validation. If it looks
                too good, it probably is.
              </p>
            </details>
          </li>
        </ul>
      </section>

      <section className="space-y-4 mb-12">
        <h2 className="text-2xl">Reading (evergreen)</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Taleb — Statistical and tail risk intuition</li>
          <li>Bouchaud/Potters — Microstructure and empirical facts</li>
          <li>Shreve — Stochastic calculus foundations</li>
        </ul>
      </section>

      <ContactMe />
    </motion.main>
  );
}
