import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Showcase } from "./components/Showcase/Showcase";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

const App = () => {
    return (
            <div>
                <Navbar />
                <Showcase />
                <Work />
                <Contact />
                <Footer />
            </div>
    )
}

export default App;