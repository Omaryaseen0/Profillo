import "./App.css";
import Profillo from "./components/code/Profillo";
import ControlButton from "./components/code/control-button";
import {Route , Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profillo />} />
      </Routes>
      <ControlButton />
    </div>
  );
}

export default App;
