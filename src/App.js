import "./App.css";
import { DisplayLink } from "./components/display-link";
import { FetchData } from "./components/fetch-data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayLink></DisplayLink>
        <FetchData></FetchData>
      </header>
    </div>
  );
}

export default App;
