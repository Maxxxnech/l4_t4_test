
import './App.css';
import FilterTree from "./components/FilterTree";
import cars from "./data/cars.json";

function App() {
  return (
    <div className="App">

     <FilterTree cars={cars}/>
    </div>
  );
}

export default App;
