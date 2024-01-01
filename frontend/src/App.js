import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Main from './Components/Main';
import AddNewProduct from './Components/AddProducts';
import DeleteProduct from './Components/DeleteProduct';
import FetchProduct from './Components/FetchProduct';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <div>
        <Routes>
          <Route path='/' element={<Main></Main>} />
          <Route path='add' element={<AddNewProduct></AddNewProduct>} />
          <Route path='delete' element={<DeleteProduct></DeleteProduct>} />
          <Route path='fetch' element={<FetchProduct></FetchProduct>} />

        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
