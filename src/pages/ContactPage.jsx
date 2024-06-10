import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

const ContactPage = () => {
    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = {
            from_name: e.target.from_name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };


        emailjs.sendForm("service_hlko0g5", "template_ra7ptam", e.target, "dPWAdB7hKakh1mGKm")
            .then((result) => {
                console.log(result.text);
                if (result) {
                    toast.success("Email Sent Successfully", { theme: "dark", autoClose: 1000 });
                    setLoading(false)
                }


            }, (error) => {
                toast.error("Failed, Please Try Again!", { theme: "dark", autoClose: 1000 });
                setLoading(false)
                console.log(error.text);
            });

    };

    return (
        <section className="text-black body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-extrabold">Contact Me</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">Drop Your Queries And Messages From Here.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="from_name" className="leading-7 text-sm text-black font-bold">Name</label>
                                    <input type="text" id="from_name" name="from_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-black font-bold">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-black font-bold">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            {!loading &&
                                <div className="p-2 w-full">
                                    <button disabled={loading} type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                </div>
                            }
                            {loading &&
                                <div className="p-2 w-full">
                                    <button disabled={loading} type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg animate-pulse">Sending...Please Wait!</button>
                                </div>
                            }

                        </div>
                    </form>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                        <a href='mailto: authorsampreeth@gmail.com' target="_top" className="text-white font-semibold">authorsampreeth@gmail.com</a>
                        <p className="leading-normal my-5 font-semibold">Hyderabad
                            <br className='font-semibold' />India
                        </p>
                        <span className="inline-flex">
                            <a className="text-white font-semibold" href='https://m.facebook.com/sampreet.nani' target='_blank'>
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-4 text-white font-semibold">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-4 text-white font-semibold" href='https://www.instagram.com/sampreethology?igsh=dXZpZHd5OXdpdzJ3' target='_blank'>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
