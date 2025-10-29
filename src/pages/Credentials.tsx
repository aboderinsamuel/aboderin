import { motion } from "framer-motion";
import { ContactMe } from "../components/ContactMe";

export function Credentials() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="max-w-3xl mx-auto px-4 sm:px-8 py-16"
    >
      <h1 className="text-4xl sm:text-5xl mb-8">Credentials</h1>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
           <li>
          <a
            href="https://learn.nvidia.com/certificates?id=xbrJp7xMSWmj8aTF91Ldrg"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-900"
          >
            NVIDIA — Enhancing Data Science Outcomes With Efficient Workflows
          </a>
        </li>
        <li>
          <a
            href="https://learn.nvidia.com/certificates?id=mt467AVmShubhwUBXy0XZg#"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-900"
          >
            NVIDIA — Accelerating Data Engineering Pipelines
          </a>
        </li>
        <li>
          <a
            href="https://learn.nvidia.com/certificates?id=SwkcQWZxSAS7OkAQvNbvlA#"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-900"
          >
            NVIDIA — Fundamentals of Deep Learning
          </a>
        </li>     
        <li>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/4XP6LOLME5CU"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-900"
          >
            Machine Learning Specialization — Stanford/DeepLearning.AI
          </a>
        </li>
        <li>
          <a
            href="https://www.coursera.org/account/accomplishments/records/MG0VGZUZVSFD"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-900"
          >
            Advanced Learning Algorithms — Stanford
          </a>
        </li>
        <li>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/LB56UBHVUSBH"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-900"
          >
            Unsupervised, Recommenders, RL — Stanford
          </a>
        </li>
        <li>
          <a
            href="https://confirm.udacity.com/e/0dbd584a-0ae8-11ee-b4fb-a7c1f02b2eef"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-900"
          >
            AI Programming with Python — Udacity
          </a>
        </li>
      </ul>

      <ContactMe />
    </motion.main>
  );
}
