import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';
import man from '../assets/man.jpg';
import solarGreen from '../assets/solarGreen.jpg';
import solarSky from '../assets/solarSky.jpg';


const About = () => {
  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto px-4 py-8 font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <motion.h1
          className="text-3xl mt-[80px] font-bold text-center text-white mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          About Our Company
        </motion.h1>

        <motion.div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[{ src: man, alt: "Solar Man" }, { src: solarGreen, alt: "Solar Green" }, { src: solarSky, alt: "Solar Sky" }].map((img, index) => (
            <Tilt key={img.src} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000}>
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              />
            </Tilt>
          ))}
        </motion.div>

        <motion.div
          className="space-y-4 bg-[#151515] p-6 rounded-lg shadow-md" // Added padding and rounded corners
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-white">
            Powering a Brighter Future
          </h2>
          <p className="text-white">
            At MOE, we are dedicated to making solar energy accessible to everyone. Our mission is to help individuals and businesses harness the power of the sun with our easy-to-install balcony solar systems. We believe that anyone can contribute to a greener planet, even in urban environments. Our high-quality solar panels are designed specifically for balconies, allowing you to generate your own clean energy regardless of space limitations. Our team is here to support you every step of the way, from consultation to installation and maintenance. By choosing MOE, you join a community focused on reducing carbon footprints and promoting renewable energy. Explore our innovative solutions and discover how you can start generating clean, renewable energy today. Together, we can create a brighter, more sustainable future.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
