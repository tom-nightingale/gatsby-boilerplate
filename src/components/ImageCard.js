import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from 'gatsby-background-image'

const ImageCard = (props) => {
    return (
        <BackgroundImage
            fluid={props.img}
            className="home-bucket relative overflow-hidden w-full border-gray-100 border cursor-pointer min-h-96 group md:w-1/3"
        >

            <AniLink
              paintDrip
              duration={.75}
              hex="#FEFAEF"
              to={props.url}
              className="absolute md:translate-y-full group-hover:translate-y-0 transition-all transition-250 flex flex-col justify-center w-full h-full p-16 lg:px-24 xl:px-24 lg:py-40 bg-navy-500 opacity-95"
              >
                <h2 className="text-beige-100 text-lg lg:text-2xl font-MRextrabold">{props.heading}</h2>
                <p className="link-underline link-teal mt-4">{props.intro}</p>
            </AniLink>

        </BackgroundImage>
    )
}

export default ImageCard;
