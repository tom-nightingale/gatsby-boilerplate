import React from 'react'
import { Link } from 'gatsby'

import LeagueLogoText from "../svg/league-logo-text.svg";
import { IoIosMailUnread, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Footer = (props) => {
    return (
        <footer className="bg-navy-500 p-8  text-beige-100 text-center md:text-left md:flex md:flex-wrap">

            <div className="p-10 md:w-1/2 lg:w-full xl:w-1/4 md:flex md:items-center md:justify-start lg:justify-center">

                <Link to="/" className="block">
                    <LeagueLogoText className="w-32 mx-auto" />
                </Link>

            </div>

            <div className="p-10 md:w-1/2 lg:w-1/3 xl:w-1/4">

                <p><span className="block mb-3 font-MRbold">League is a creative agency in <span className="text-teal-500">Nottingham</span>.</span> We help businesses of all sizes achieve their online marketing goals. We're here to help you grow. It's what we do.</p>

            </div>

            <div className="p-10 md:w-1/2 lg:w-1/3 xl:w-1/4">

                <h3 className="mb-3 font-MRextrabold">General Enquiries</h3>

                <a href="mailto:hello@weareleague.co.uk" className="flex flex-wrap items-center justify-center md:justify-start hover:text-teal-500 transition-all transition-250"><IoIosMailUnread className="inline-block text-xl mr-2" /> hello@weareleague.co.uk</a>

            </div>

            <div className="p-10 md:w-1/2 lg:w-1/3 xl:w-1/4">

                <h3 className="mb-3 font-MRextrabold mb-4 lg:mb-2">Social</h3>

                <div className="flex flex-wrap justify-center md:justify-start">

                    {/* <Link to="/" className="inline mx-2 text-3xl hover:text-teal-500 transition-all transition-250"><IoLogoTwitter /></Link> */}

                    <a href="https://www.instagram.com/weareleague.co.uk/" className="inline mx-2 text-3xl hover:text-teal-500 transition-all transition-250"><IoLogoInstagram /></a>

                    {/* <Link to="/" className="inline mx-2 text-3xl hover:text-teal-500 transition-all transition-250"><IoLogoLinkedin /></Link> */}

                </div>

            </div>

        </footer>
    )
}

export default Footer
