import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
    return (
        <>
            <footer className="bg-gray-500 text-white text-sm sm:text-base md:text-md lg:text-lg xl:text-xl flex items-center justify-center p-5 flex-col gap-3">
                <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">Social Media Platform</h1>
                <div className="flex items-center gap-5 text-xl md:text-2xl lg:text-3xl">
                    <a href="https://www.facebook.com/arnchristian.rosales.9">
                        <FaFacebook className="hover:text-blue-500 focus:text-blue-500"/>
                    </a>
                     <a href="https://x.com/HikawaRaye">
                        <BsTwitterX className="hover:text-blue-500 focus:text-blue-500"/>
                    </a>
                     <a href="https://www.instagram.com/asah.irei?igsh=MXc3b2NpODZlMjR0cQ==">
                        <FaInstagram className="hover:text-blue-500 focus:text-blue-500"/>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} ArnDev. All rights reserved.</p>
            </footer>
        </>
    )
}