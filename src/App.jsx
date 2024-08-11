import "./App.css";
import Button from "./components/Button";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="container">
        <Home label="All pages" />
        <div className="separator-container">
          <div className="separator" />
        </div>
        <Home label="Page 1" />
        <Home label="Page 2" />
        <Home label="Page 3" />
        <Home label="Page 4" />
        <div className="separator-container">
          <div className="separator" />
        </div>
        <Button />
      </div>
    </>
  );
}

export default App;
