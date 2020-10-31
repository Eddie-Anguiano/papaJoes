import "./styles/main.scss";
import Home from "./components/Home";
import Template from "./components/Template";
import Header from "./components/Header";

function App() {
  return (
    <Template>
      <div className="template-wrapper">
        <Header />
        <main className="template-main">
          <Home />
        </main>
      </div>
    </Template>
  );
}

export default App;
