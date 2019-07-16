import React from "react"
import { Link, graphql } from "gatsby"

import TemplateWrapper from "../components/TemplateWrapper"
import Navigation from "../components/Navigation"

import Img from "gatsby-image"
import { IoIosMailUnread } from "react-icons/io";
import LeagueLogoText from "../svg/league-logo-text.svg";
import LeagueBgImage from "../img/league-bg.jpg";

console.log(LeagueBgImage);

const IndexPage = props => {
    return(
        <TemplateWrapper>

            <div>

                <div className="container max-w-full md:flex md:flex-wrap md:items-start mx-auto">

                    <div style={{
                        backgroundImage: "url(" + LeagueBgImage + ")"
                    }} className="bg-multiply bg-cover bg-center md:w-1/2 lg:w-2/5 min-h-screen p-10 py-16 md:p-16 lg:p-20 flex flex-wrap flex-col justify-between bg-navy-600 text-beige-100">

                        <Link to="/">
                            <LeagueLogoText className="w-32 mb-8"/>
                        </Link>

                        <div>

                            <h1 className="font-bold text-3xl mb-5 font-MRextrabold sm:text-5xl md:text-3xl xl:text-5xl">We are <span className="text-teal-500">League</span>.</h1>

                            <p className="font-MRbold leading-loose max-w-md lg:max-w-md sm:text-lg md:text-base xl:text-xl">We pair beautifully designed websites with brilliant online marketing to help your business grow.</p>

                        </div>

                        <Link to="/" className="flex flex-wrap align-bottom"><IoIosMailUnread className="text-white text-2xl sm:text-3xl md:text-2xl" /> <span className="font-MRbold ml-1 sm:text-base">work with us</span></Link>

                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5 lg:pl-16 lg:min-h-screen">

                        <Navigation />

                        <div class="min-h-screen bg-gray-200">
                            <Img alt="League Digital | Digital Marketing" title="League Digital | Digital Marketing" fluid={props.data.heroImage.childImageSharp.fluid} />
                        </div>

                    </div>

                </div>


                <div className="container max-w-full flex flex-wrap mx-auto">

                    <div className="">

                        <h2>Recent projects</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit eget libero quis volutpat. Nunc ac ornare sem. Ut placerat vitae ex ut rhoncus.</p>

                        <a href="">See all projects</a>

                    </div>

                    <div className="flex flex-wrap">

                        <div className="">
                            <Img alt="something" title="something" fluid={props.data.heroImage.childImageSharp.fluid} />
                        </div>

                        <div className="">
                            <h2>Esland Care</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor molestiae quidem dolore qui a optio earum maxime magni eius, quas, explicabo ea quo? Minima, veniam. Blanditiis soluta numquam, ullam sequi?</p>

                            <a href="">See more projects</a>
                        </div>

                    </div>

                </div>

                <div className="container max-w-full flex flex-wrap">

                    <div className="md:w-2/6">
                        <h2>Plan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                        <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
                    </div>

                    <div className="md:w-2/6">
                        <h2>Develop</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                        <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
                    </div>

                    <div className="md:w-2/6">
                        <h2>Market</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, tenetur, temporibus!</p>
                        <p>Totam nostrum sit dolore vel aliquid quas, qui aperiam illum in. Pariatur deleniti odit consectetur illo consequatur laudantium autem?</p>
                    </div>


                </div>

                <div className="container max-w-full flex flex-wrap">

                    <a className="md:w-2/6">
                        <Img alt="something" title="something" fluid={props.data.heroImage.childImageSharp.fluid} />
                        <div>
                            <h2>Strategy</h2>
                            <p>How we start every project</p>
                        </div>
                    </a>

                    <a className="md:w-2/6">
                        <Img alt="something" title="something" fluid={props.data.heroImage.childImageSharp.fluid} />
                        <div>
                            <h2>Development</h2>
                            <p>How we start every project</p>
                        </div>
                    </a>

                    <a className="md:w-2/6">
                        <Img alt="something" title="something" fluid={props.data.heroImage.childImageSharp.fluid} />
                        <div>
                            <h2>Results</h2>
                            <p>How we start every project</p>
                        </div>
                    </a>

                </div>

            </div>

        </TemplateWrapper>
    );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
