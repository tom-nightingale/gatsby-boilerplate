import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuItem = ({ link, name }) => {
  return (

    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
        <Link to={link} className="block font-MRextrabold py-2 text-lg text-teal-600">{name}</Link>
    </motion.div>
  );
};

export default MenuItem;
