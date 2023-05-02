import { useEffect, useState ,useRef} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contracts, { Contracts_MetaMask } from "./contract/contracts";
import 'bootstrap/dist/css/bootstrap.min.css';

//ページのimport

import Mint_page from "./pages/mint/main";
import Owned_tokens_page from "./pages/owned_tokens/main";

function App() {
  const cont = new Contracts();

  
  return (

    <div className="App">
      

      <body>
        <div >
          <BrowserRouter>
            
            <Routes>
              <Route path={'/mint'} element={<Mint_page url={'mint'} cont={cont}/>}  />
            </Routes>
            <Routes>
              <Route path={'/owned_token/:address'} element={<Owned_tokens_page url={'owned_token'} cont={cont}/>}  />
            </Routes>
            
            
          </BrowserRouter>
        </div>

      </body>
      

    </div>

  );
}

export default App;
