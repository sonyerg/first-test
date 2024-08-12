import "./App.css";
import Button from "./components/Button";
import Home from "./components/Home";
import Separator from "./components/Separator";

function App() {
  return (
    <>
      <div className="container">
        <Home label="All pages" />
        <Separator />
        <Home label="Page 1" />
        <Home label="Page 2" />
        <Home label="Page 3" />
        <Home label="Page 4" />
        <Separator />
        <Button />
      </div>
    </>
  );
}

export default App;
