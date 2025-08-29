import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
    return (
        <>
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
        </>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<App/>);