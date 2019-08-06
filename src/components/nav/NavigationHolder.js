import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { Link } from "gatsby"
import { IoIosMailUnread } from "react-icons/io"
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90% 5%)`,
    backgroundColor: "#fff",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(25px at 86% 50px)",
    opacity: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const NavigationHolder = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (

    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >

        <div className="hidden md:flex min-w-full flex-wrap justify-end pr-12">

            <div className="w-full md:flex flex-wrap justify-around items-center px-4 md:py-8 lg:w-3/4 xl:w-1/2 font-MRbold">

                <Link
                    to="/services"
                    className="inline-block hover:text-teal-500 transition-all transition-250">our services</Link>

                <Link
                    to="/projects"
                    className="inline-block hover:text-teal-500 transition-all transition-250">projects</Link>

                <Link
                    to="/contact"
                    className="inline-block hover:text-teal-500 transition-all transition-250">work with us</Link>

            </div>

        </div>

          <motion.div className="nav__background" variants={sidebar} />

          <Navigation />

          <MenuToggle toggle={() => toggleOpen()} />

    </motion.nav>
  );
};

export default NavigationHolder;
