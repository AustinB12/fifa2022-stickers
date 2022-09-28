import "./App.css";
import data from "./stickers.json";
import { CountryList } from "./CountryList";

function App() {
  return (
    <div className="App">
      <CountryList data={data.data} />
    </div>
  );
}

export default App;
