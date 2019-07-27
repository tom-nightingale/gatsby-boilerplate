import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Navigation from "../components/Navigation"

import LeagueLogoText from "../svg/league-logo-text.svg";



const Header = (props) => (

    <header className="relative container max-w-full md:flex md:flex-wrap md:justify-between mx-auto bg-navy-600">

        <div className="md:w-1/2 lg:w-2/12 p-10 py-8 md:p-12 flex flex-wrap flex-col text-beige-100">

            <AniLink
                paintDrip
                duration={.75}
                hex="#0b1529"
                to="/"
                className="w-32">
                <LeagueLogoText className="inline-block" />
            </AniLink>

        </div>

        <div className="w-full md:w-1/2 lg:w-3/5 lg:pl-16 overflow-y-visible">

            <Navigation />

        </div>

    </header>

);

export default Header;
