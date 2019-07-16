import React from "react"
import { Link } from "gatsby";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

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

              <nav className={`w-full bg-gray-300 absolute top-0 left-0 p-10 min-h-screen z-10 ${this.state.navBarActiveClass}`}>
                  <a className="absolute top-0 right-0 p-10 text-4xl" href="#" onClick={() => this.toggleHamburger()}><IoMdClose /></a>
              </nav>

          </div>
      )
    }
}

export default Navigation;
