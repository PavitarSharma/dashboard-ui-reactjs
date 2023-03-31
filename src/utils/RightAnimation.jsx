import React from "react";
import { motion } from "framer-motion";

const RightAnimation = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 },
        
      }}
   
    >
      {children}
    </motion.div>
  );
};

export default RightAnimation;
