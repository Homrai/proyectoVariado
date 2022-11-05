import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from './App';
import Cronometro from './views/Cronometro';
import Calculadora from './views/Calculadora';
import ApiPokemon from './views/ApiPokemon';
import ErrorPage from './views/ErrorPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<App/>}>
            <Route path='cronometro' element={<Cronometro/>} />
            <Route path='calculadora' element={<Calculadora/>} />
            <Route path='pokeapi' element={<ApiPokemon/>} />

            <Route path='*'  element={<ErrorPage/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>

);
