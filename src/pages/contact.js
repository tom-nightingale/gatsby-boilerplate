import React from "react"
import { graphql } from "gatsby"

import TemplateWrapper from "../components/TemplateWrapper"
import ContactForm from "../components/ContactForm"
import PageHeader from "../components/PageHeader"

import { IoIosMailUnread, IoIosChatbubbles } from "react-icons/io"

const ContactPage = (props) => {

    return (

        <TemplateWrapper>

            <>

                <PageHeader
                    heroTitle="Get in touch"
                    projectServices="We'd love to work with you"
                    img={props.data.heroBg.childImageSharp.fluid}
                />

                <div className="bg-beige-100 p-8 lg:p-16 text-center">

                    <p className="font-MRbold text-lg">We find that having a meeting about your project helps to kick things off.</p>

                    <p>Where it's over a coffee, over the phone or via a Skype video call we'd be happy to hear how we can work together.</p>

                    <a className="flex flex-wrap items-center font-MRbold text-teal-900 justify-center" href="mailto:hello@weareleague.co.uk"><IoIosMailUnread className="text-2xl mr-2"/>hello@weareleague.co.uk</a>

                    <a className="mt-4 flex flex-wrap items-center font-MRbold text-teal-900 justify-center" href="tel:hello@weareleague.co.uk"><IoIosChatbubbles className="text-2xl mr-2"/>0115 9679443</a>

                </div>

                <ContactForm />

            </>

        </TemplateWrapper>
    );
}

export default ContactPage;

export const pageQuery = graphql`
  query {
    heroBg: file(relativePath: { eq: "hero-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
