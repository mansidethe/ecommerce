import React, { useEffect, useState } from 'react'
import './Updateproduct.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Updateproduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [brand, setBrand] = useState('');

const {_id} = useParams();

const loadproducts = async ()=>{
    const response = await axios.get(`/product/${_id}`) 

    const {name, description, price, brand, productImage } = response?.data?.data

    setName(name)
    setDescription(description)
    setPrice(price)
    setBrand(brand)
    setProductImage(productImage)
}

useEffect(()=>{
    loadproducts();
},[])
   

  const updateproduct = async () => {
    if (!name || !description || !price || !brand || !productImage) {
      alert('please enter all feilds')
      return
    }
    const product = {
      name,
      description,
      price,
      brand,
      productImage
    }

    const response = await axios.post('/product', product);

    alert(response.data.message)

    setName('') 
    setDescription('')
    setPrice('')
    setBrand('')
    setProductImage('')
  
  }

  return (
    <div>
      <h1 className='text-center'>Update product</h1>

      <div>

        <form className='form'>
          <div className='container'>

            <input type='text'
              placeholder='name'
              className='name'
             value={name}
              onChange={(e) => {setName(e.target.value)} }/>

            <input type='text'
              placeholder='description'
              className='name'
             value={description}
              onChange={(e) =>{ setDescription(e.target.value)}} />

            <input type='text'
              placeholder='price'
              className='name'
             value={price}
              onChange={(e) => {setPrice(e.target.value)} }/>

            <input type='text'
              placeholder='brand'
              className='name'
             value={brand}
              onChange={(e) => {setBrand(e.target.value)}} />

            <input type='text'
              placeholder='productImage'
              className='name'
             value={productImage}
              onChange={(e) =>{ setProductImage(e.target.value)}} />

            <button type='button' className='btn' onClick={updateproduct}>update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Updateproduct