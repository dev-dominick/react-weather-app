import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './styles/App.css'

function App() {
  return (
    <div className="routesContainer">
        <Routes>
          <Route path="/" element={< Home />} />
        </Routes>
    </div>
  );
}

export default App;
