import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const DesktopNavItems = (props) => {

    const isPageHeader = props.isPageHeader;

    return (

        <div className={`hidden md:flex flex-wrap justify-end pr-12 ${isPageHeader.length > 0 ? 'md:w-1/2 lg:w-3/5' : ''} `}>

            <nav className="w-full md:flex flex-wrap justify-around items-center px-4 py-12 mt-1 lg:w-3/4 xl:w-1/2 font-MRbold">

              <AniLink
                  to="/services"
                  paintDrip
                  duration={.75}
                  hex="#0b1529"
                  className={`hidden md:inline-block hover:text-teal-500 transition-all transition-250 ${isPageHeader.length > 0 ? 'text-beige-100' : ''} `}>our services</AniLink>

              <AniLink
                  to="/projects"
                  paintDrip
                  duration={.75}
                  hex="#0b1529"
                  className={`hidden md:inline-block hover:text-teal-500 transition-all transition-250 ${isPageHeader.length > 0 ? 'text-beige-100' : ''} `}>projects</AniLink>

              <AniLink
                  to="/contact"
                  paintDrip
                  duration={.75}
                  hex="#0b1529"
                  className={`hidden md:inline-block hover:text-teal-500 transition-all transition-250 ${isPageHeader.length > 0 ? 'text-beige-100' : ''} `}>work with us</AniLink>

              </nav>

          </div>
    )
}

DesktopNavItems.defaultProps = {
    isPageHeader: ''
}

export default DesktopNavItems;
