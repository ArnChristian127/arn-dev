import { CiPaperplane } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";
export default function About() {
    return (
        <>
            <div id="about" className="mt-16 px-6 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:20px_20px]">
                <div className="container mx-auto py-15 grid grid-cols-1 lg:grid-cols-2 text-gray-600 gap-5 lg:px-8">
                    <div className="text-center items-center lg:text-left lg:items-start flex justify-center flex-col order-1 lg:order-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">Hi👋, my name is</h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">Arn Christian S. Rosales</h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
                            I am <span className="text-blue-400">
                                <Typewriter
                                    words={['Developer', 'Programer', 'Gamer']}
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />{'{}'}
                            </span>
                        </h1>
                        <p className="mt-3">
                            I've always been passionate about technology, and I love exploring how it can solve real-world problems.
                            In addition to my coursework, I enjoy working on projects that allow me to apply my skills,
                            and I'm always looking to collaborate with others.
                        </p>
                        <button className="text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 focus:from-blue-500 focus:to-purple-500 px-6 py-3 lg:py-4 rounded-lg font-semibold lg:text-2xl mt-3 flex items-center gap-2">
                            Check My Resume
                            <CiPaperplane/>
                        </button>
                    </div>
                    <div className="flex items-center justify-center order-0 lg:order-1">
                        <img src="assets/arn.jpg" alt="arn" className="w-full h-auto rounded-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] border-2 border-blue-400"/>
                    </div>
                </div>
            </div>
        </>
    );
}