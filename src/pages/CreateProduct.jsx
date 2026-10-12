import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../components/Navbar'


function CreateProduct() {

const [formData, setFormData] = useState({
    "_id": "",
    "title": "",
    "description": "",
    "category": "",
    "price": '',
    "quantity": '',
    "createdAt": "",
    "updatedAt": ""
})

function handleChange(e){
    setFormData({...formData,[e.target.name]: e.target.value})
}

async function sumbit(e){
    e.preventDefault()
    const res = await axios.post(`${import.meta.env.VITE_API_URL}`,formData)
}

  return (
    
    <div>
        <Navbar/>
        
        <h1>Create Product</h1>


        <form onSubmit={sumbit}>
        <label htmlFor="title">Product Title</label>
        <input 
        type="text"
        value={formData.title}
        onChange={handleChange}
        name='title'
        id='title'
        />

        <label htmlFor="description">Description</label>
        <input 
        type="text"
        value={formData.description}
        onChange={handleChange}
        name='description'
        id='description'
        />

        <label htmlFor="category">Category</label>
        <input 
        type="text"
        value={formData.category}
        onChange={handleChange}
        name='category'
        id='category'
        />

        <label htmlFor="price">Price</label>
        <input 
        type="text"
        value={formData.price}
        onChange={handleChange}
        name='price'
        id='price'
        />

        <label htmlFor="quantity">Quantity</label>
        <input 
        type="text"
        value={formData.quantity}
        onChange={handleChange}
        name='quantity'
        id='quantity'
        />

        <label htmlFor="createdAt">CreatedAt</label>
        <input 
        type="text"
        value={formData.createdAt}
        onChange={handleChange}
        name='createdAt'
        id='createdAt'
        />

        <label htmlFor="updatedAt">UpdatedAt</label>
        <input 
        type="text"
        value={formData.updatedAt}
        onChange={handleChange}
        name='updatedAt'
        id='updatedAt'
        />

        <button>Create Student</button>
        </form>



    </div>
  )
}

export default CreateProduct