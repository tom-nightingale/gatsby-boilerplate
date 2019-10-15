import React from 'react';

const ContactForm = () => {
    return (
        <div className="container max-w-full my-8 lg:my-24 px-4 md:px-0 text-center">

            <div className="max-w-xl mx-auto">
                <h2 className="font-MRextrabold text-lg md:text-2xl lg:text-3xl mb-4">We want to work with you. <span className="block">Let's build something together.</span></h2>
                <p className="lg:text-lg">Let's form a partnership to help build an online solution that you're proud to call your own.</p>
            </div>

            <form className="w-full mx-auto my-8 md:flex md:flex-wrap md:justify-between xl:px-20" name="Contact Form" action="#" netlify="true">

                <label className="block w-full md:w-1/2 lg:w-1/4 my-8 px-4" htmlFor="Name">
                    <span className="block w-full mb-2 font-MRbold">Your name is...</span>
                    <input className="p-2 w-full border-b-4 border-teal-500 text-center text-navy-500" type="text" name="Name" placeholder="Joe Bloggs" />
                </label>

                <label className="block w-full md:w-1/2 lg:w-1/4 my-8 px-4" htmlFor="Tel">
                    <span className="block w-full mb-2 font-MRbold">and we can call you on...</span>
                    <input className="p-2 w-full border-b-4 border-teal-500 text-center text-navy-500" type="tel" name="Tel" placeholder="0115..." />
                </label>

                <label className="block w-full lg:w-1/4 px-4 mb-8 lg:my-8" htmlFor="Email">
                    <span className="block w-full mb-2 font-MRbold">or email you at...</span>
                    <input className="p-2 w-full border-b-4 border-teal-500 text-center text-navy-500" type="email" name="Email" placeholder="hello@weareleague.co.uk" />
                </label>

                <label className="w-full lg:w-1/4 lg:my-8" htmlFor="Submit">
                    <input className="w-auto px-4 py-2 lg:px-8 lg:py-3 rounded-sm font-MRextrabold text-beige-100 text-xl bg-teal-500" name="Submit" type="submit" value="Send" />
                </label>


            </form>

        </div>
    )
}

export default ContactForm;
