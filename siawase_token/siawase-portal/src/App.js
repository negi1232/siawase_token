import { useEffect, useState ,useRef} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contracts, { Contracts_MetaMask } from "./contract/contracts";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const cont = new Contracts();

  
  return (

    <div className="App">
      

      <body>
        <div >
          <BrowserRouter>
            
            
          </BrowserRouter>
        </div>

      </body>
      

    </div>

  );
}

export default App;
