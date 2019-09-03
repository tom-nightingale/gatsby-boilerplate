import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, staggerDirection: 1, delayChildren: 1 },
    zIndex: 50,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: .5 },
    zIndex: -9999
  }
};

const navItems = {
    "Home" : "/",
    "Services" : "/services",
    "Web design" : "/services/web-design",
    "Web development" : "/services/web-development",
    "SEO" : "/services/seo",
    "PPC" : "/services/ppc",
    "Content marketing" : "/services/content-marketing",
    "Copywriting" : "/services/copywriting",
    "Projects" : "/projects",
    "Contact" : "/contact",
}

const Navigation = () => {

    return (

        <motion.div className="nav-hold absolute top-0 left-0 flex min-w-full min-h-screen flex flex-col justify-center items-center" variants={variants}>

            {
                Object.entries(navItems).map(([name, url]) => (
                    <MenuItem key={name} link={url} name={name} />
                ))
            }

        </motion.div>

    )
}


export default Navigation;
