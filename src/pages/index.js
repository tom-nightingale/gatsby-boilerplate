import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Img from "gatsby-image";

const IndexPage = props => {
    return(
        <div>
            <Header headerText="Hello Gatsby!" />
            <Link to="/about" />

            <Img alt="something" title="something" fluid={props.data.imageOne.childImageSharp.fluid} />

            <p>What a world.</p>
        </div>
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
