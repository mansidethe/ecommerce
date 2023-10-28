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
        <h1 className='prod-text'>Product Detail</h1>
        <div className='pro-card'>
        <p className='prod-texts'><b>Product ID:</b>{_id}</p>
        <img src={productImage} className='pro-img'/>
        <p className='pro-text'><b>Name : </b>{name}</p>
        <p className='pro-text'><b>Description : </b>{description}</p>
        <p className='pro-text'><b>Brand : </b>{brand}</p>
        <p className='pro-text'><b>price : </b>{price}</p>
        </div>
    </div>
  )
}

export default Productdetails