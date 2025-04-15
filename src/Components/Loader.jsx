import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="text-sm mt-8 text-gray-500"
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;
