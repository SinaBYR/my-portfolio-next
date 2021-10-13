import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Showcase } from "./components/Showcase/Showcase";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
// import { useReducer } from "react";
// import { themeReducer, themeColor } from "./dark-mode-future/theme-reducer";

const App = () => {
    // const [theme, dispatch] = useReducer(themeReducer, themeColor)

    return (
        <div>
            <Navbar />
            <Showcase />
            {/* <button onClick={() => dispatch({type: 'darken'})}>Change</button> */}
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;