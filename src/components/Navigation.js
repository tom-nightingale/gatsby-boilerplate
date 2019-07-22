import React from "react"
import { Link } from "gatsby";

import LeagueLogoText from "../svg/league-logo-text.svg";
import LeagueBgImage from "../img/league-bg.jpg";

import { IoIosMenu, IoMdClose, IoIosMailUnread } from "react-icons/io";


const Navigation = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        navBarActiveClass: "translate-x-full"
      };
    }

    toggleHamburger = (e) => {
      e.preventDefault(); //cancel default action
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
                navBarActiveClass: "translate-x-0"
              })
            : this.setState({
                navBarActiveClass: "translate-x-full"
              });
        }
      );
    };

    render() {

      const subItems = {
          "web design" : "/",
          "web development" : "/",
          "seo" : "/",
          "ppc" : "/",
          "content marketing" : "/",
          "copywriting" : "/",
          "telecoms" : "/"
      }

      return (
          <div className="min-w-full flex flex-wrap justify-end">

              <nav className="md:flex flex-wrap justify-around items-center md:py-16 lg:py-12 xl:py-16 px-4 w-full lg:w-3/4 xl:w-1/2 bg-white font-MRextrabold">

                  <Link to="/" className="hidden md:inline-block hover:text-teal-500 transition-all transition-250">our services</Link>
                  <Link to="/projects" className="hidden md:inline-block hover:text-teal-500 transition-all transition-250">projects</Link>
                  <Link to="/" className="hidden md:inline-block hover:text-teal-500 transition-all transition-250">work with us</Link>

                  <a className="absolute md:relative z-10 inline-block top-0 right-0 mt-12 mr-8 md:mt-0 md:mr-0 p-1 md:p-0" href="/" onClick={(e) => this.toggleHamburger(e) }>
                      <IoIosMenu className="text-beige-100 md:text-navy-500 text-4xl" />
                  </a>

              </nav>

              <div className={`w-full lg:w-1/4 bg-white absolute top-0 right-0 p-5 pt-6 lg:p-10 lg:pt-16 min-h-screen z-10 transition-all transition-250 ${this.state.navBarActiveClass}`}>

                  <a className="absolute top-0 right-0 mt-12 mr-8 p-1 md:mt-6 md:mr-6 lg:mt-2 lg:mr-8 lg:pt-12 text-4xl text-navy-500" href="/" onClick={(e) => this.toggleHamburger(e)}><IoMdClose /></a>

                  <nav className="flex flex-col justify-center pl-10 text-navy-500 font-MRextrabold ">
                      <Link to="/"><LeagueLogoText className="mt-4 mb-8 w-32 mb-8" /></Link>
                      <Link to="/" className="py-3">our services</Link>
                      {/*
                          Object.entries(subItems).map(([name, url]) => (
                              <Link to={url} className="py-3 pl-4 text-teal-500">{name}</Link>
                          ))
                      */}
                      <Link to="/projects" className="py-3">projects</Link>
                      <Link to="/" className="py-3">latest news</Link>
                      <Link to="/" className="flex flex-wrap items-center py-3"><IoIosMailUnread className="text-2xl mr-2"/> work with us</Link>
                  </nav>

              </div>

          </div>
      )
    }
}

export default Navigation;
