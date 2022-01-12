import { useContext } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Showcase } from "./components/Showcase/Showcase";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ThemeContext } from "./dark-mode-future/theme-context";
import { Redirect, Route, Switch } from "react-router";
import { Dashboard } from "./components/Dashboard/Dashboard";

const App = () => {
    const dark = useContext(ThemeContext)

    const host = window.location.host
    const array = host.split('.')
    return (
        <div style={{color: dark ? '#f7f7f7' : '#1e262c'}}>
            <Switch>
                {/* render dashboard if "dashboard" is the subdomain */}
                {
                    array[0].toLowerCase() === 'dashboard' && 
                    <Route component={Dashboard}/>
                }
                <Route exact path="/">
                    <Navbar />
                    <Showcase />
                    <Work />
                    <Contact />
                    <Footer />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default App;