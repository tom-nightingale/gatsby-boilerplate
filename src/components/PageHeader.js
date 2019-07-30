import React from "react"

import BackgroundImage from 'gatsby-background-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Navigation from "../components/Navigation"

import LeagueLogoText from "../svg/league-logo-text.svg"

const PageHeader = (props) => {

    /* Set the page hero if it has one, and then*/
    const pageHero = props.heroTitle;
    const projectServices = props.projectServices;

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

            {pageHero.length > 0 &&
                <div className="flex flex-wrap items-center justify-center flex-col w-full text-center mx-auto text-beige-100 min-h-96">

                    <h1 className="text-3xl leading-snug mb-4 xl:text-6xl">{pageHero}</h1>
                    {projectServices.length > 0 &&
                        <h3 className="text-lg xl:text-2xl text-beige-100">{projectServices}</h3>
                    }

                </div>
            }

        </BackgroundImage>

    );

}

PageHeader.defaultProps = {
    heroTitle: '',
    projectServices: ''
}

export default PageHeader;
