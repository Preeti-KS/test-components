import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ColourSlider from "./components/ColourSlider"
import Dropdown from "./components/Dropdown"
import Timer from "./components/Timer"
import SelectLanguages from "./pages/SelectLanguages"
import SwitchHome from "./pages/SwitchHome"

function Routes() {
    // const [time, setTime] = useState(0);

    // useEffect(() => {
    //     setInterval(() => {
    //         setTime(t => t+1)
    //     }, 3000)
    // }, [])

    return (
        <Router>
            <Switch>
                <Route path="/dropdown">
                    <Dropdown></Dropdown>
                </Route>
                <Route path="/colourslider">
                    <ColourSlider></ColourSlider>
                </Route>
                <Route path="/languages">
                    <SelectLanguages></SelectLanguages>
                </Route>
                <Route path="/timer">
                    <Timer time={10}></Timer>
                </Route>
                <Route path="/switch">
                    <SwitchHome></SwitchHome>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
