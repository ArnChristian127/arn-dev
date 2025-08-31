import { FaProjectDiagram } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";
import ProjectList from "../datas/ListProjects";
export default function Projects() {
    return (
        <>
            <div id="projects">
                <div className="py-5 px-6 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center lg:text-left">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold inline-block align-middle">
                                Projects
                            </h1>
                            <FaProjectDiagram className="inline-block align-middle ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-400"/>
                        </div>
                        <p className="mt-3">
                            Here are the projects I’ve worked on and created so far.
                        </p>
                        <p>
                            These reflect my skills, creativity, and experience in various areas, and I’m excited to share the outcomes of my efforts
                        </p>
                        <p>
                            Each project represents a unique challenge I tackled, and I’ve learned a great deal throughout the process
                        </p>
                    </div>
                </div>
                <div id="about" className="px-6 py-15 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:20px_20px]">
                    <div className="container mx-auto text-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-8">
                        {ProjectList.map((items, index) => (
                            <div key={index} className="group overflow-hidden rounded-t-xl bg-white rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border border-gray-300 cursor-pointer">
                                <img src={items.url} alt={items.alt} className="h-50 w-full object-cover rounded-xl transform transition duration-300 ease-in-out group-hover:scale-110"/>
                                <div className="p-3">
                                    <div className="h-40 md:h-50 lg:h-55 select-none overflow-y-auto">
                                        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">{items.title}</h1>
                                        <p>{items.desc}</p>
                                    </div>
                                    <button className="flex items-center gap-2">
                                        Click Here
                                        <CiPaperplane/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}