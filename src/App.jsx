import React from 'react'
import { Route, Routes } from "react-router"
import Navbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import ProductList from './pages/ProductList'

function App() {  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<ProductList/>} />
        <Route path="/new-product" element={<CreateProduct/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
      </Routes>
      </div>
  )
}

export default App