import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaHeart, FaShoppingCart, FaPhone } from 'react-icons/fa';
import { SectionWrapper } from '../hoc';
import { useNavigate } from 'react-router-dom';

const products = [
    {
      name: "RayVolt Lite",
      description: "Perfectly sized for balconies, our panels maximize energy output while taking up minimal space.",
      image: "https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "RayVolt Max",
      description: "No technical expertise needed—simply set up and start generating power within minutes.",
      image: "https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "RayVolt Pro",
      description: "Built to withstand various weather conditions, ensuring long-lasting performance.",
      image: "https://images.pexels.com/photos/7102661/pexels-photo-7102661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    // Add more products as needed
  ];// Assume we have a products array in constants

const ProductCard = ({ name, description, image }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const navigate = useNavigate();

  const handleCallNow = () => {
    const phoneNumber = '0711 60192327'; // Replace with your actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Tilt className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-lg shadow-md overflow-hidden relative"
      >
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <button 
          className={`absolute top-2 right-2 p-2 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-black text-gray-600'} hover:bg-red-600 hover:text-white transition-colors`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart size={20} />
        </button>
        <div className="p-6">
          <h3 className="text-2xl text-black font-semibold mb-3">{name}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center transition-colors">
              <FaShoppingCart className="mr-2" />
              <span className="whitespace-nowrap">Add to Cart</span>
            </button>
            
            <button 
              className="w-full sm:w-auto bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-200 text-gray-800 px-4 py-2 rounded flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:text-white"
              onClick={handleCallNow}
            >
              <FaPhone fill="black" className="mr-2" />
              <span className="whitespace-nowrap text-black">Call Now</span>
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Products = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray">
      <div
        className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Products, "products");
