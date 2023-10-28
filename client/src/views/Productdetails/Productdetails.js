import React, { useEffect, useState } from 'react'
import './Productdetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Productdetails() {
  const {_id} = useParams()
  const [product,setProduct]=useState({})

  const loadproducts=async ()=>{
    const response=await axios.get(`/product/${_id}`)
    console.log(response)
    setProduct(response?.data?.data)
  }

  useEffect(()=>{
    loadproducts();
  },[])
     const{name, productImage, price, description, brand} = product
  return (
    <div>
        <h1>Product Detail</h1>
        <h2>Product ID:{_id}</h2>
        <p>{productImage}</p>
        <h1>Name:{name}</h1>
        <h1>Description:{description}</h1>
        <h1>Brand:{brand}</h1>
        <h1>price:{price}</h1>
    </div>
  )
}

export default Productdetails