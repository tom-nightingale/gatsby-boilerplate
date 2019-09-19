import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { IoIosCheckmarkCircle } from "react-icons/io";

import ContactForm from "../components/ContactForm.js"
import PageHeader from "../components/PageHeader.js"
import NavigationHolder from "../components/nav/NavigationHolder.js"


// const ProjectsPage = ( props ) => {
class ProjectsPage extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const links = document.querySelectorAll("a[href$='/projects']");
    links.forEach(each => (each.setAttribute('aria-current', 'page')));
  }

  render() {

    const galleryImages = this.props.data.datoCmsProject.gallery;
    const websiteFeatures = this.props.data.datoCmsProject.websiteFeatures;

    return (
        <>

          <HelmetDatoCms seo={this.props.data.datoCmsProject.seoMetaTags} />

          <NavigationHolder />

          <PageHeader
              img={this.props.data.datoCmsProject.mainImage.fluid}
              heroTitle={this.props.data.datoCmsProject.heroHeadline}
              projectServices={this.props.data.datoCmsProject.services} />

          <div className="container max-w-full w-full md:flex flex-wrap md:px-0">

                <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                    <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Latest Projects</h2>
                    <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{this.props.data.datoCmsProject.projectName}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.props.data.datoCmsProject.content }}></div>
                    <a className="link-underline link-teal" href={this.props.data.datoCmsProject.projectUrl} target="_blank" rel="noopener noreferrer">View live website</a>
                </div>

                <BackgroundImage className="min-h-25 w-full md:min-h-screen md:w-1/3 xl:w-1/2" fluid={this.props.data.datoCmsProject.mainImage.fluid}>
                </BackgroundImage>

          </div>

          <ul className="flex flex-wrap p-8 mb-8">
            {
              websiteFeatures.map(function(feature) {
                return(
                  <li className="w-full md:w-1/2 lg:w-1/6 p-8 text-center font-MRbold p-4 flex flex-wrap w-1/6">
                    <div className="w-full p-4">
                      <IoIosCheckmarkCircle className="text-6xl text-teal-500 opacity-50 mb-4 mx-auto "/>
                      {feature.featureName}
                    </div>
                  </li>
                )
              })
            }
          </ul>

          <div className="w-full mx-auto flex flex-wrap items-center justify-center">

            {
              galleryImages.map(function(image) {
                return(
                  <div className="w-full md:w-2/6 lg:w-1/3 p-4 md: p-8">
                      <Img fluid={image.fluid} className="bg-beige-100 min-h-128" />
                  </div>
                )
              })
            }

          </div>

          <ContactForm />

        </>
    )

  }
}

export default ProjectsPage;

export const query = graphql`
  query ProjectQuery($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      },
      projectName
      heroHeadline
      services
      content
      projectUrl
      mainImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      websiteFeatures {
          icon {
            fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
          featureName
        }
    }
  }
`
