import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router"

function ProductList() {
  
  const [products, setProducts] = useState([])

  async function getAllProducts() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
      setProducts(res.data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }


  async function deleteProduct(id) {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`)
      getAllProducts()
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
      <Navbar />
      
      {products.map((oneProduct) => (
        <div key={oneProduct._id}>
          <p>Title: {oneProduct.title}</p>
          <p>Description: {oneProduct.description}</p>
          <p>Category: {oneProduct.category}</p>
          <Link to={`/products/${oneProduct._id}`}>Go to Products Details</Link>
          <br />
          <button onClick={() => deleteProduct(oneProduct._id)}>Delete Product</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList