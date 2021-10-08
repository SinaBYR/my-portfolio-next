import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Showcase } from "./components/Showcase/Showcase";

const App = () => {
    return (
            <div>
                <Navbar />
                <Showcase />
                <Work />
            </div>
    )
}

export default App;