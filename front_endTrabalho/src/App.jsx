import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import {BiSmile} from "react-icons/bi";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
      <div className="finalsite">
      <h3><BiSmile/>O melhor site de Filmes de sua região</h3>
      </div>
      
    </div>
    
    
  );
}

export default App;
