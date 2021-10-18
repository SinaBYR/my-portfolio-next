import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Showcase } from "./components/Showcase/Showcase";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { useContext } from "react/cjs/react.development";
import { ThemeContext } from "./dark-mode-future/theme-context";
import { Route, Switch } from "react-router";
import { CreateProject } from "./components/CreateProject/CreateProject";

const App = () => {
    const dark = useContext(ThemeContext)

    // const get = async () => {
    //     const response = await axios.get('/projects')
    //     const data = response.data;
    //     console.log(data)
    // }

    // useEffect(() => {
    //     get()
    // })

    return (
        <div style={{color: dark ? '#f7f7f7' : '#1e262c'}}>
            <Switch>
                <Route exact path="/create" component={CreateProject}/>
                <Route>
                    <Navbar />
                    <Showcase />
                    <Work />
                    <Contact />
                    <Footer />
                </Route>
            </Switch>
        </div>
    )
}

export default App;