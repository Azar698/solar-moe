import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg shadow-xl overflow-hidden max-w-4xl w-full"
      >
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-indigo-600 text-white p-8 md:w-1/2 flex flex-col justify-center items-center text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
            <p className="mb-4">Got questions, ready to power up your space, or want to explore solar options?</p>
            <p>Reach out through the contact form  were here to help you go solar!</p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-8 md:w-1/2 bg-gray-700 text-white"
          >
            <h2 className="text-3xl font-bold mb-4 hidden md:block">Contact</h2>
            <h2 className="text-3xl font-bold mb-4 md:hidden">Let's Talk</h2>
            <p className="text-sm mb-4 text-gray-300">* Required</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name *"
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDialog(false)}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 max-w-md w-full shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Thank You for Contacting Us🎉</h3>
              <p className="text-white mb-6">
                We appreciate your interest in our solar solutions. Our team will review your message and get back to you shortly.
              </p>
              <button
                onClick={() => setShowDialog(false)}
                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
