import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
function App() {
    return (
        <>
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Education/>
            <Experience/>
            <Certificates/>
            <Contact/>
        </>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<App/>);