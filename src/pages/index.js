import React from "react"
import { Link, graphql } from "gatsby"
import TemplateWrapper from "../components/TemplateWrapper"
import Img from "gatsby-image";

const IndexPage = props => {
    return(
        <TemplateWrapper>

            <div>

                <div className="container max-w-full flex flex-wrap mx-auto min-h-screen">

                    <div className="w-full md:w-1/2 lg:w-2/5 p-5 py-16 flex flex-wrap flex-col items-start bg-navy-500 text-beige-100 font-semibold">

                        <h1 className="font-bold text-3xl mb-5">We are <span className="text-teal-500">League</span>.</h1>

                        <p className="flex-grow">We pair beautifully designed websites with brilliant online marketing to help your business grow.</p>

                        <p className="mt-auto">[icon] work with us</p>

                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5 bg-gray-800 p-5">
                        Two thirds of the screen
                    </div>
                    
                </div>


                <Img alt="something" title="something" fluid={props.data.imageOne.childImageSharp.fluid} />


            </div>

        </TemplateWrapper>
    );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
