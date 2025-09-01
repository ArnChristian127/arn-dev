import { FaToiletPaper } from "react-icons/fa6";
import CertificateList from "../datas/ListCertificate";
export default function Certificates() {
    return (
        <>
            <div id="certificate">
                <div className="py-5 px-6 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300">
                    <div className="container mx-auto text-gray-600 lg:px-8 text-center lg:text-left">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold inline-block align-middle">
                                Certificates
                            </h1>
                            <FaToiletPaper className="inline-block align-middle ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-purple-400"/>
                        </div>
                        <p className="mt-3">
                            Here are my certificates that I received.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-6 py-15 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl border-b border-gray-300 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:20px_20px] text-gray-600">
                <div className="container mx-auto lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CertificateList.map((items, index) => (
                        <div key={index} className="border border-gray-300 bg-white rounded-xl">
                            <img src={items.url} alt={items.alt} className="h-50 w-full object-cover rounded-xl"/>
                            <div className="h-40 md:h-45 lg:h-45 select-none overflow-y-auto p-3">
                                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">{items.title}</h1>
                                <p>{items.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}