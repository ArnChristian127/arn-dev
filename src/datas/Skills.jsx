import { FaHtml5, FaJava, FaCss3Alt, FaPhp, FaBootstrap } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { SiLua, SiCplusplus, SiCoursera, SiSharp, SiTailwindcss } from "react-icons/si";
const ProgramingLanguage = [
    {label: 'Java', component: <FaJava className="text-orange-400"/> },
    {label: 'Python', component: <AiOutlinePython className="text-blue-500"/> },
    {label: 'HTML', component: <FaHtml5 className="text-red-400"/> },
    {label: 'CSS', component: <FaCss3Alt className="text-blue-500"/> },
    {label: 'Java Script', component: <IoLogoJavascript className="text-yellow-400"/> },
    {label: 'C++', component: <SiCplusplus className="text-purple-800"/> },
    {label: 'C', component: <SiCoursera className="text-blue-200"/> },
    {label: 'CSharp', component: <SiSharp className="text-green-400"/> },
    {label: 'Lua', component: <SiLua className="text-blue-900"/> },
    {label: 'PHP', component: <FaPhp className="text-blue-400"/> },
]
const LibraryFramework = [
    {label: 'React JS', component: <RiReactjsLine className="text-blue-400"/> },
    {label: 'React Native', component: <TbBrandReactNative className="text-blue-400"/> },
    {label: 'Tailwind', component: <SiTailwindcss className="text-blue-400"/> },
    {label: 'Bootstrap', component: <FaBootstrap className="text-purple-500"/> },
    {label: '.NET', component: <span className="bg-purple-600 text-white p-1 text-sm sm:text-base md:text-md lg:text-lg rounded-lg">.NET</span> },
]
export { ProgramingLanguage, LibraryFramework }