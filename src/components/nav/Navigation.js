import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];

const navItems = {
    "Home" : "/",
    "Services" : "/",
    "Web design" : "/",
    "Web development" : "/",
    "Seo" : "/",
    "Ppc" : "/",
    "Content marketing" : "/",
    "Copywriting" : "/",
    "Telecoms" : "/",
    "Projects" : "/projects",
    "Contact" : "/contact",
}

const Navigation = () => {
    return (

        <motion.ul className="nav-hold absolute top-0 left-0 z-10 p-16" variants={variants}>

        {
            Object.entries(navItems).map(([name, url]) => (
                <MenuItem link={url} name={name} />
            ))
        }

        </motion.ul>
    )
}


export default Navigation;
