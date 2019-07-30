import React from "react"

import BackgroundImage from 'gatsby-background-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Navigation from "../components/Navigation"

import LeagueLogoText from "../svg/league-logo-text.svg"

const Header = (props) => {

    return (

        <BackgroundImage
            Tag = "header"
            fluid={props.img}
            className="relative container max-w-full bg-cover bg-center bg-multiply mx-auto bg-navy-600"
        >

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

        </BackgroundImage>

    );

}

export default Header;
