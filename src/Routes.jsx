import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import ColourSlider from "./components/ColourSlider";
import Dropdown from "./components/Dropdown";
import SelectLanguages from "./pages/SelectLanguages";

function Routes() {
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
            </Switch>
        </Router>
    )
}

export default Routes;