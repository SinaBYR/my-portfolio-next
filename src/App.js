import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Showcase } from "./components/Showcase/Showcase";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { useContext } from "react/cjs/react.development";
import { ThemeContext } from "./dark-mode-future/theme-context";

const App = () => {
    const dark = useContext(ThemeContext)
    return (
        <div style={{color: dark ? '#f7f7f7' : '#1e262c'}}>
            <Navbar />
            <Showcase />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;