import React, { useState } from 'react'
import './Addproduct.css'
import axios from 'axios'

function Addproduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [brand, setBrand] = useState('');

  const addproduct = async () => {
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

    const responce = await axios.post('/product', product);

    alert(responce.data.message)

    setName('')
    setDescription('')
    setPrice('')
    setBrand('')
    setProductImage('')

  }

  return (
    <div>
      <h1 className='text-center'>Addproduct</h1>

      <div>

        <form className='form'>
          <div className='container'>

            <input type='text'
              placeholder='name'
              className='name'
              name={name}
              onChange={(e) => setName(e.target.value)} />

            <input type='text'
              placeholder='description'
              className='name'
              name={description}
              onChange={(e) => setDescription(e.target.value)} />

            <input type='text'
              placeholder='price'
              className='name'
              name={price}
              onChange={(e) => setPrice(e.target.value)} />

            <input type='text'
              placeholder='brand'
              className='name'
              name={brand}
              onChange={(e) => setBrand(e.target.value)} />

            <input type='text'
              placeholder='productImage'
              className='name'
              name={productImage}
              onChange={(e) => setProductImage(e.target.value)} />

            <button type='button' className='btn' onClick={addproduct}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Addproduct