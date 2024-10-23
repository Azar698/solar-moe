import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';


const reviews = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: "The RayVolt Lite is perfect for my small apartment! Its compact yet powerful enough to meet my energy needs.",
    name: "Amanda Green",
    rating: 4, // Star rating out of 5
    location: "Denver, CO",
    product: "RayVolt Lite"
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    quote: "RayVolt Max has been a game changer for my home. I’ve seen significant savings on my electricity bill.",
    name: "David Patel",
    rating: 5, // Star rating out of 5
    location: "Phoenix, AZ",
    product: "RayVolt Max"
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    quote: "The RayVolt Pro is a powerhouse! It powers all my home appliances effortlessly and has great durability.",
    name: "Jessica Lee",
    rating: 5, // Star rating out of 5
    location: "Austin, TX",
    product: "RayVolt Pro"
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
    quote: "I love the sleek design of the RayVolt Lite, and it works well for my small energy needs. Great for minimalists.",
    name: "Oliver Thompson",
    rating: 4, // Star rating out of 5
    location: "Portland, OR",
    product: "RayVolt Lite"
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    quote: "With RayVolt Max, we can power multiple devices at once, and the installation process was seamless.",
    name: "Sophia Harris",
    rating: 5, // Star rating out of 5
    location: "Dallas, TX",
    product: "RayVolt Max"
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    quote: "RayVolt Pro is everything I expected and more. It handles my high energy consumption like a champ!",
    name: "Liam Martinez",
    rating: 5, // Star rating out of 5
    location: "San Diego, CA",
    product: "RayVolt Pro"
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
    quote: "RayVolt Lite offers great value for money. It's compact and very efficient for small setups.",
    name: "Emily Johnson",
    rating: 4, // Star rating out of 5
    location: "Miami, FL",
    product: "RayVolt Lite"
  }
];



const Reviews = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(0);
  const marqueeRef = useRef(null);
  const speed = 1;

  useAnimationFrame((time, delta) => {
    if (!isHovered && marqueeRef.current) {
      scrollRef.current -= speed;
      if (scrollRef.current <= -marqueeRef.current.scrollWidth / 2) {
        scrollRef.current = 0;
      }
      marqueeRef.current.style.transform = `translateX(${scrollRef.current}px)`;
    }
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center"
      >
        What Our Customers Say?
      </motion.h2>
      <div className="overflow-x-hidden whitespace-nowrap relative w-full">
        <motion.div
          ref={marqueeRef}
          className="marquee-inner flex items-center gap-[2vw] py-[12vh] will-change-transform"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Duplicated content for infinite scrolling effect */}
          {Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex-shrink-0 flex-grow-0 w-[300px] sm:w-[400px] md:w-[500px] h-[250px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg cursor-pointer rounded-xl shadow-lg p-6 mx-[2vw] flex flex-col justify-between"
  >
    <div>
      <img
        src={`${review.image}?w=150&h=150&fit=crop&crop=faces`}
        alt={review.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <p className="text-base font-medium text-white mb-2 w-full max-h-[80px] overflow-hidden text-ellipsis">{review.quote}</p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <p className="text-sm text-white opacity-80">{review.name}</p>
        <div className="flex items-center text-xs text-white opacity-60">
          <FaMapMarkerAlt className="mr-1" />
          <span>{review.location}</span>
        </div>
      </div>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-400'}`} />
        ))}
      </div>
    </div>
  </motion.div>
);

export default Reviews;
