import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import four04NotFound from '../assets/404NoFound.png'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 border border-opacity-20 border-white"
      >
        <motion.img
          src={four04NotFound}
          alt="404 Not Found"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mb-6 w-64 h-auto"
        />
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-6xl font-bold text-white mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-white mb-8"
        >
          Oops! Page not found.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
