import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import paymentCard from '../assets/paymentCard.png';
import moneyImage from '../assets/moneyImage.png'; // Add this import
import error from '../assets/error.png'; // Assume you have this error image

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [showError, setShowError] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber && expiry && cvv) {
      setShowThankYou(true);
      setTimeout(() => {
        window.location.href = 'https://razorpay.com/payment-gateway';
      }, 2000);
    } else {
      setShowError(true);
    }
  };


  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto mt-10 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Payment Gateway</h2>
        <form onSubmit={handleSubmit}>
          <motion.div
            className="mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="cardNumber" className="block text-sm font-medium text-white-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9012 3456"
              required
            />
          </motion.div>
          <div className="flex space-x-4 mb-4">
            <motion.div
              className="flex-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="expiry" className="block text-sm font-medium text-white-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                required
              />
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="cvv" className="block text-sm font-medium text-white-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123"
                required
              />
            </motion.div>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pay Now
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 h-96 md:h-auto perspective-1000 cursor-pointer"
        style={{ perspective: 1000 }}
      >
        {/* Card image for desktop */}
        <motion.div
          className="hidden md:block w-full h-full"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <img src={paymentCard} alt="Payment Card" className="w-full h-full object-contain" />
        </motion.div>

        {/* Animated money image for mobile */}
        <div
          className="md:hidden w-full h-full flex items-center justify-center"
        >
          <img src={moneyImage} alt="Money" className="w-3/4 h-auto" />
        </div>
      </motion.div>

      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-sm text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Thank You!</h3>
              <p className="text-white mb-4">Your payment is being processed. You will be redirected to the payment gateway shortly.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowError(false)}
        >
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center">
            <img src={errorImage} alt="Error" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Error</h3>
            <p className="text-gray-600 mb-4">Please fill in all card details before submitting.</p>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setShowError(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Payment;
