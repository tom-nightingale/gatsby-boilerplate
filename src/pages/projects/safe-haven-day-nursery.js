import React from "react"
import { graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import ContactForm from "../../components/ContactForm"
import PageHeader from "../../components/PageHeader"
import NavigationHolder from "../../components/nav/NavigationHolder"

const ProjectsPage = (props) => {

    //Declare projects dataset
    const project = {
        title: "Safe Haven Day Nursery",
        intro: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officia quasi sit eaque magnam temporibus, repellendus ipsa, architecto enim dolorem debitis autem, explicabo quis molestiae omnis quia aliquam nobis laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae cumque dicta excepturi ducimus molestiae voluptatem delectus autem ab quisquam hic, placeat reiciendis labore odit rerum maxime earum, id voluptatum officiis!</p>",
        bgColor: '#000',
        coverImage: "leagueBg",
        services: "Web Design & Development",
        url: "http://www.safehavennursery.co.uk/",
    }

    return (

        <>

            <NavigationHolder />

            <PageHeader
                img={props.data.safeHaven.childImageSharp.fluid}
                heroTitle={project.title}
                projectServices={project.services} />

            <div className="container max-w-full w-full md:p-16 md:flex flex-wrap md:px-0">

                <BackgroundImage className="latest-project w-full" fluid={props.data.safeHaven.childImageSharp.fluid}>
                </BackgroundImage>

                    <div className="p-8 md:p-12 lg:p-24 xl:p-32 md:w-2/3 xl:w-1/2">
                        <h2 className="text-teal-500 md:text-teal-300 text-lg md:text-4xl opacity-50">Latest Projects</h2>
                        <p className="text-3xl lg:text-5xl leading-tight mt-2 mb-4 md:mb-8 text-navy-600 font-MRextrabold">{project.title}</p>
                        <div dangerouslySetInnerHTML={{ __html: project.intro }}></div>
                        <a className="link-underline link-teal" href={project.url} target="_blank" rel="noopener noreferrer">View live website</a>
                    </div>

            </div>

            <div className="w-full mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full md:w-2/6 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.safeHaven.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
                <div className="w-full md:w-2/6 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.safeHaven.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
                <div className="w-full md:w-2/6 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.safeHaven.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full md:w-2/4 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.safeHaven.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
                <div className="w-full md:w-2/4 lg:w-1/3 p-4 md: p-8">
                    <BackgroundImage
                        fluid={props.data.safeHaven.childImageSharp.fluid}
                        className="bg-beige-100 min-h-128">
                    </BackgroundImage>
                </div>
            </div>

            <ul className="flex flex-wrap p-8 mb-8">
                <li className="w-full md:w-1/2 lg:w-1/6 p-8 text-center font-MRbold">Wordpress CMS</li>
                <li className="w-full md:w-1/2 lg:w-1/6 p-8 text-center font-MRbold">Custom Theme</li>
                <li className="w-full md:w-1/2 lg:w-1/6 p-8 text-center font-MRbold">User profiles for each manager & club executive</li>
                <li className="w-full md:w-1/2 lg:w-1/6 p-8 text-center font-MRbold">Wordpress CMS</li>
                <li className="w-full md:w-1/2 lg:w-1/6 p-8 text-center font-MRbold">Custom Theme</li>
                <li className="w-full md:w-1/2 lg:w-1/6 p-8 text-center font-MRbold">User profiles for each manager & club executive</li>
            </ul>

            <ContactForm />
        </>

    );
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    safeHaven: file(relativePath: { eq: "safe-haven.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
