import "./styles/main.scss";
import Home from "./components/Home";
import Template from "./components/Template";
import Nav from "./components/Nav";

function App() {
  return (
    <Template>
      <div className="template-wrapper">
        <Nav />
        <main className="template-main">
          <Home />
        </main>
      </div>
    </Template>
  );
}

export default App;
