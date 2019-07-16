import React from "react"
import { Link } from "gatsby";

import LeagueLogoText from "../svg/league-logo-text.svg";
import LeagueBgImage from "../img/league-bg.jpg";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoIosMailUnread } from "react-icons/io";

const Navigation = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        navBarActiveClass: "hidden"
      };
    }

    toggleHamburger = (e) => {
      // e.preventDefault(); //cancel default action
      // toggle the active boolean in the state
      this.setState(
        {
          active: !this.state.active
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
            ? this.setState({
                navBarActiveClass: "block"
              })
            : this.setState({
                navBarActiveClass: "hidden"
              });
        }
      );
    };

    render() {
      return (
          <div className="min-w-full flex flex-wrap justify-end py-12 md:py-16 xl:py-12">

              <nav className="flex flex-wrap justify-around items-center py-2 px-4 w-full lg:w-3/4 xl:w-1/2 bg-white font-MRextrabold">

                  <Link>our services</Link>
                  <Link>about us</Link>
                  <Link>work with us</Link>
                  <a href="#" onClick={() => this.toggleHamburger() }>
                      <IoIosMenu className="text-4xl antialiased subpixel-antialiased" />
                  </a>

              </nav>

              <div className={`w-1/4 bg-white absolute top-0 right-0 p-10 pt-16 min-h-screen z-10 ${this.state.navBarActiveClass}`}>

                  <a className="absolute top-0 right-0 p-10 mt-2 pt-12 text-4xl text-navy-500" href="#" onClick={() => this.toggleHamburger()}><IoMdClose /></a>

                  <nav className="flex flex-col justify-center pl-10 text-navy-500 font-MRextrabold ">
                      <Link to="/"><LeagueLogoText className="mt-4 mb-8 w-32 mb-8" /></Link>
                      <Link to="/" className="py-3">our services</Link>
                      <Link to="/" className="py-3 pl-4 text-teal-500">web design</Link>
                      <Link to="/" className="py-3 pl-4 text-teal-500">web development</Link>
                      <Link to="/" className="py-3 pl-4 text-teal-500">seo</Link>
                      <Link to="/" className="py-3 pl-4 text-teal-500">ppc</Link>
                      <Link to="/" className="py-3 pl-4 text-teal-500">content marketing</Link>
                      <Link to="/" className="py-3 pl-4 text-teal-500">copywriting</Link>
                      <Link to="/" className="py-3 pl-4 text-teal-500">telecoms</Link>
                      <Link to="/" className="py-3">about us</Link>
                      <Link to="/" className="py-3">our work</Link>
                      <Link to="/" className="py-3">latest news</Link>
                      <Link to="/" className="flex flex-wrap items-center py-3"><IoIosMailUnread className="text-2xl mr-2"/> work with us</Link>
                  </nav>

              </div>

          </div>
      )
    }
}

export default Navigation;
