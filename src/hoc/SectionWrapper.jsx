import { motion } from 'framer-motion'

// Define the fadeInContainer animation
const fadeInContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const SectionWrapper = (Component, idName) =>
  function EnhancedSection() {
    return (
      <motion.section
        variants={fadeInContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper
