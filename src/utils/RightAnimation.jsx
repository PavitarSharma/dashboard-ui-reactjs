import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const RightAnimation = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RightAnimation;
