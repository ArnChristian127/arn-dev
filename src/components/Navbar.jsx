import { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { animate } from 'animejs';
export default function Navbar() {
    const list = ["About", "Skills", "Projects", "Education", "Experience", "Certificate", "Contact"];
    const [isAnimating, setAnimating] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const animateHook = useRef(null);
    const toggleHandler = () => {
        if (isAnimating) return;
        setAnimating(true);
        if (!isOpen) {
            setOpen(true);
        } else {
            animate(animateHook.current, {
                translateY: [0, '-100%'],
                opacity: [1, 0],
                duration: 300,
                ease: "easeOutQuad",
                onComplete: () => {
                    setOpen(false);
                    setAnimating(false);
                }
            });
        }
    }
    useEffect(() => {
        if (isOpen) {
            animate(animateHook.current, {
                translateY: ['-100%', 0],
                opacity: [0, 1],
                duration: 300,
                ease: "easeOutQuad",
                onComplete: () => {
                    setAnimating(false);
                }
            });
        }
    }, [isOpen]);
    return (
        <> 
            <nav className={`${isOpen ? 'lg:border-b' : 'border-b'} border-gray-300 px-6 py-4 text-gray-500 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl fixed w-full top-0 z-50 bg-white`}>
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 select-none">
                        Arn<span className="text-blue-400">Dev</span>
                    </h1>
                    <ul className="hidden items-center gap-5 font-semibold lg:flex">
                        {list.map((item) => (
                            <li key={item} className="hover:text-blue-400 focus:text-blue-400">
                                <a href={`#${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="px-3 py-3 bg-blue-400 text-white font-semibold rounded-lg lg:flex items-center gap-2 hover:bg-blue-500 focus:bg-blue-500 hidden" onClick={() => (window.location.href = 'https://github.com/ArnChristian127')}>
                        Github Profile 
                        <FaGithub/>
                    </button>
                    <button className="text-white bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 p-2 rounded-lg lg:hidden" onClick={() => toggleHandler()}>
                        <RxHamburgerMenu/>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <nav ref={animateHook} className="px-6 py-5 bg-gray-100 rounded-b-2xl fixed top-16 md:top-17 w-full z-40 text-gray-600 font-semibold lg:hidden border-t border-b border-gray-300">
                    <div className="container mx-auto">
                        <ul className="space-y-5">
                            {list.map((item) => (
                                <li key={item} className="hover:text-blue-400 focus:text-blue-400">
                                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                        <button className="px-3 py-2 bg-blue-400 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-blue-500 focus:bg-blue-500 mt-5" onClick={() => (window.location.href = 'https://github.com/ArnChristian127')}>
                            Github Profile 
                            <FaGithub/>
                        </button>
                    </div>
                </nav>
            )}
        </>
    );
}