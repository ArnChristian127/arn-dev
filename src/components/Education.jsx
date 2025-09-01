import { MdLibraryBooks } from "react-icons/md";
import EducationList from "../datas/ListEducation";
export default function Education() {
    return (
        <>
            <div id="education">
                <div className="py-5 px-6 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center lg:text-left">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold inline-block align-middle">
                                Education
                            </h1>
                            <MdLibraryBooks className="inline-block align-middle ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400"/>
                        </div>
                        <p className="mt-3">
                            My educational journey has been a path of continuous learning, self-discovery, and personal growth.
                        </p>
                    </div>
                </div>
                <div className="px-6 py-15 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:20px_20px]">
                    <div className="container mx-auto text-gray-600 lg:px-8 flex flex-col gap-5">
                        {EducationList.map((items, index) => (
                             <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-400"/>
                                    <div className="flex-1 w-0.5 bg-gray-300"/>
                                </div>
                                <div className="bg-white border border-gray-300 p-4 rounded-lg w-200 flex gap-3 flex-col items-center sm:flex-row md:flex-row lg:flex-row">
                                    <img src={items.src} alt={items.alt} className="w-full max-w-[100px] rounded-full h-auto"/>
                                    <div className="text-center md:text-start lg:text-start">
                                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{items.name}</h1>
                                        <p>Date: {items.year}</p>
                                        <p>{items.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}