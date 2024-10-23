import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt,FaPhoneAlt  } from 'react-icons/fa'
import { SlEnvolope } from "react-icons/sl";


const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebook, link: 'https://www.facebook.com/moebalkonkraftwerk' },
    { Icon: FaTwitter, link: 'https://twitter.com' },
    { Icon: FaInstagram, link: 'https://www.instagram.com/moe_balkonkraftwerk/' },
    { Icon: FaLinkedin, link: 'https://www.linkedin.com/company/ninetigmbh/posts/?feedView=all' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <div className="mb-4 md:mb-0 text-center">
            <h3 className="text-xl font-bold">MOE-The modular balcony power plant with storage</h3>
            <p className="text-sm mt-1 flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              Stuttgart, Baden-Württemberg
            </p>
            <p className="text-sm mt-1 flex items-center justify-center">
              <SlEnvolope className="mr-2" />
              info@nineti.de
            </p>
            <p className="text-sm mt-1 flex items-center justify-center">
              <FaPhoneAlt className="mr-2" />
              0711 60192327
            </p>
          </div>
        </div>
        <div className="mt-4 text-center text-xs">
          <div className="flex justify-center space-x-4">
            {socialIcons.map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
         <p className="text-sm mt-4">© 2024 All rights reserved</p>
          <p>Developed by Azar@frontend_developer, India, Hyderabad</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
