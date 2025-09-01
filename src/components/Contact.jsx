import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { animate } from 'animejs';
import emailjs from 'emailjs-com';
export default function Contact() {
    const [isModal, setModal] = useState(false);
    const popUp = useRef(null);
    const emailHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setModal(true);
        }, (error) => {
            console.log(error.text);
            alert('Failed to send email. Try again!');
        });
    }
    useEffect(() => {
        animate(popUp.current, {
            scale: [0, 1],
            duration: 300,
            ease: "outBack"
        });
    }, [isModal]);
    return (
        <>
            {isModal && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50 z-60"/>
                    <div className="fixed inset-0 flex justify-center items-center z-60 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl text-gray-600 px-4">
                        <div ref={popUp} className="bg-white w-100 rounded-xl p-3 text-center flex justify-center items-center flex-col gap-3">
                            <FaCheckCircle className="text-green-400 text-6xl"/>
                            <p>Email sent successfully!</p>
                            <button className="bg-blue-400 text-white rounded-lg hover:bg-blue-500 focus:bg-blue-500 mt-3 w-full p-3" onClick={() => setModal(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </>
            )}
            <div id="contact">
                <div className="py-5 px-6 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold inline-block align-middle">
                                Contacts
                            </h1>
                        </div>
                        <p className="mt-3">
                            Here are my certificates that I received.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-6 py-15 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:20px_20px] text-gray-600">
                <div className="container mx-auto lg:8 flex justify-center items-center">
                    <form className="border border-gray-300 p-4 bg-white w-150 rounded-lg" onSubmit={emailHandler}>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Email Me</h1>
                        <input
                            className="mt-3 outline-none border border-gray-300 w-full p-2 rounded-xl px-3"
                            placeholder="Your Name"
                            type="text"
                            name="name"
                        />
                        <input
                            className="mt-3 outline-none border border-gray-300 w-full p-2 rounded-xl px-3"
                            placeholder="Your Email"
                            type="email"
                            name="email"
                        />
                        <input
                            className="mt-3 outline-none border border-gray-300 w-full p-2 rounded-xl px-3"
                            placeholder="Your Subject"
                            type="text"
                            name="subject"
                        />
                        <textarea
                            className="mt-3 outline-none border border-gray-300 w-full p-2 rounded-xl px-3"
                            placeholder="Your Messages"
                            type="text"
                            name="message"
                        />
                        <button type="submit" className="bg-blue-400 text-white rounded-lg gap-2 hover:bg-blue-500 focus:bg-blue-500 mt-3 w-full p-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}