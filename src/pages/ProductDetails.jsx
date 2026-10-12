import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductDetails() {

    const { productId } = useParams()
    const [products, setProducts] = useState(null)

    async function getProducts() {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        setProducts(res.data)
    }
    useEffect(() => {

        getProducts()

    },[])



  return (
    <div>
        <Navbar/>
        
        <h1>Product Details</h1>
            {products ? (
              <>
            <h2>Title: {products.title}</h2>
            <p>Description: {products.description}</p>
            <p>Category: {products.category}</p>
            <p>Price: {products.price}</p>
            <p>Quantity: {products.quantity}</p>
            <p>CreatedAt: {products.createdAt}</p>
            <p>UpdatedAt: {products.updatedAt}</p>
            </>
          ) : <h2>Loading...</h2>}
        
    
    
    
    </div>
  )
}

export default ProductDetails