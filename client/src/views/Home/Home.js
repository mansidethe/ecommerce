import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'

function Home() {

  const [products, setpProducts] = useState([]);

  const loadproducts = async () => {
    const responce = await axios.get("/products")

    setpProducts(responce?.data?.data)
  }

  const deletepro = async (_id) => {
    const response = await axios.delete(`/product/${_id}`)
    if (response?.data?.success) {
      loadproducts();
    }
  }

  useEffect(() => {
    loadproducts();
  }, [])

  return (
    <>
      <h1 className='product-text '>Beauty products</h1>
      <div className='containers'>


        {

          products?.map((product, index) => {
            const { _id, name, description, price, productImage, brand } = product

            return (
              <div className='containers'>
                <div key={index} className='product-card '>
                  <img src={productImage} className='product-img' alt='product' />
                  <h1 className='product-text'>{name}</h1>
                  <p className='product-desc'>{description}</p>
                  <h2 className='product-price'>{price}</h2>

                  <h2 className='product-price'>{brand}</h2>
                  <a href={`/productdetails/${_id}`}  target='_blank' className='view-btn' >View Details</a>

                  <button className='delete-btn'
                    onClick={() => { deletepro(_id) }}>
                    Delete
                  </button>

                  <a href={`/updateproduct/${_id }`}  target='_blank' className='update-btn' >Edit</a>

                </div>
              </div>

            )

          })
        }
      </div>

    </>
  )
}

export default Home