import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../components/Navbar'

function CreateProduct() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: ""
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/products`, {...formData})
      navigate('/products')
    } catch (error) {
      console.error("Error creating product:", error)
    }
  }

  return (
    <div>
      <Navbar />
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Product Title</label>
        <input 
          type="text"
          value={formData.title}
          onChange={handleChange}
          name="title"
          id="title"
        />

        <label htmlFor="description">Description</label>
        <input 
          type="text"
          value={formData.description}
          onChange={handleChange}
          name="description"
          id="description"
        />

        <label htmlFor="category">Category</label>
        <input 
          type="text"
          value={formData.category}
          onChange={handleChange}
          name="category"
          id="category"
        />

        <label htmlFor="price">Price</label>
        <input 
          type="number"
          value={formData.price}
          onChange={handleChange}
          name="price"
          id="price"
        />

        <label htmlFor="quantity">Quantity</label>
        <input 
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          name="quantity"
          id="quantity"
        />

        <button type="submit">Create Product</button>
      </form>
    </div>
  )
}

export default CreateProduct