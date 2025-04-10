import { motion } from "framer-motion";
import {logo} from '../assets/index.js';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="text-4xl font-bold text-blue-600"
      >
        <img
        src={logo}
        alt="logo"
        width={100}
        height={100}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-sm mt-4 text-gray-500"
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;
