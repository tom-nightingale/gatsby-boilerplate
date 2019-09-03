import React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import BackgroundImage from 'gatsby-background-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import PageHeader from "../components/PageHeader"
import ContactForm from "../components/ContactForm"
import NavigationHolder from "../components/nav/NavigationHolder"


const NotFoundPage = (props) => {

    return (

        <>

            <HelmetDatoCms seo={props.data.datoCmsHome.seoMetaTags} />

            <NavigationHolder />

            <PageHeader img={props.data.leagueBg.childImageSharp.fluid} />

            <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

                <BackgroundImage className="latest-project w-full" fluid={props.data.leagueBg.childImageSharp.fluid}>
                </BackgroundImage>

                    <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                        <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">404 Error</h2>
                        <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">Page not found!</p>
                        <p>Unfortunately, it looks like the page you requeted doesn't exist any more.</p>
                        <p>Try visiting one of the pages in our navigation, or try heading to the homepage.</p>
                        <AniLink
                            to="/"
                            className="link-underline link-teal"
                            paintDrip
                            duration={.75}
                            hex="#1BB6BA"> Go home
                        </AniLink>
                    </div>

            </div>

            <ContactForm />

        </>
    );
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    leagueBg: file(relativePath: { eq: "league-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
