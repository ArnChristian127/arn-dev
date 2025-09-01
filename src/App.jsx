import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
function App() {
    return (
        <>
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Education/>
            <Experience/>
        </>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<App/>);