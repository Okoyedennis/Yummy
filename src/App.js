import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Herosection from "./Component/Herosection";
import Body from "./Component/Body";
import Icecream from "./Component/Icecream";
import Meal from "./Component/Meal";
import Footer from "./Component/Footer";
import Pizzas from "./Component/Pizzas";
import Desserts from "./Component/Desserts";
import Full_menu from "./Component/Full_menu";

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Herosection />
            <Body />
            <Meal />
            <Icecream />
            <Footer />
          </Route>
          <Route path="/pizzas">
            <Pizzas />
            <Footer />
          </Route>
          <Route path="/desserts">
            <Desserts />
            <Footer />
          </Route>
          <Route path="/fullMenu">
            <Full_menu />
            <Footer />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
