import "./styles/main.scss";
import Home from "./components/Home";
import Template from "./components/Template";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Template>
      <div className="template-wrapper">
        <Header />
        <main className="template-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </main>
        <footer className="footer">&#169;Pizzamania</footer>
      </div>
    </Template>
  );
}

export default App;
