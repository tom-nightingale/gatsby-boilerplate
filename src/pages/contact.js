import React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { IoIosMailUnread, IoIosChatbubbles } from "react-icons/io"

import ContactForm from "../components/ContactForm.js"
import PageHeader from "../components/PageHeader.js"
import NavigationHolder from "../components/nav/NavigationHolder.js"


const ContactPage = (props) => {
  
    return (

        <>

          <HelmetDatoCms seo={props.data.datoCmsContact.seoMetaTags} />

          <NavigationHolder />

          <PageHeader
              heroTitle={props.data.datoCmsContact.heroHeadline}
              projectServices={props.data.datoCmsContact.heroIntro}
              img={props.data.datoCmsContact.heroImage.fluid}
          />

          <div className="bg-beige-100 p-8 lg:p-16 text-center">

              <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsContact.content }} />

              <a className="flex flex-wrap items-center font-MRbold text-teal-900 justify-center" href="mailto:hello@weareleague.co.uk"><IoIosMailUnread className="text-2xl mr-2"/>hello@weareleague.co.uk</a>

              <a className="mt-4 flex flex-wrap items-center font-MRbold text-teal-900 justify-center" href="tel:01159679443"><IoIosChatbubbles className="text-2xl mr-2"/>0115 9679443</a>

          </div>

          <ContactForm />

        </>
    );
}

export default ContactPage;

export const pageQuery = graphql`
  query ContactQuery {
    datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroHeadline
      heroIntro
      content
      heroImage {
        fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
