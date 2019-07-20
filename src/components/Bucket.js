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
            className="md:w-2/6"
        >

            <div>
                <h2>{props.heading}</h2>
                <p>{props.intro}</p>
            </div>
        </Link>
    )
}

export default Bucket;
