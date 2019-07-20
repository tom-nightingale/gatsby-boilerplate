import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const Bucket = (props) => {
    console.log(props);
    return (
        <Link
            to="/"
            style={{
                backgroundImage: "url(" + props.img.childImageSharp.fluid + ")"
            }}
            className="w-full md:w-2/6 border-gray-100 border"
        >

            <div className="flex flex-col justify-center w-full h-full p-16 lg:px-24 xl:px-32 lg:py-40 bg-navy-500">
                <h2 className="text-beige-100 text-lg lg:text-2xl font-MRextrabold">{props.heading}</h2>
                <p className="text-teal-500 font-MRbold">{props.intro}</p>
            </div>

        </Link>
    )
}

export default Bucket;
