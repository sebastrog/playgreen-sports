import {motion} from 'framer-motion';

interface LayoutSectionProps {
  children: React.ReactNode;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({children}) => {

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -30,
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default LayoutSection;