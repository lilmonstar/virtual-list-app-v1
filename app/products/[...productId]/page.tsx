'use client'
import React, { useEffect, useState } from 'react'
import {notFound, useParams} from 'next/navigation'

import { Product } from '@/interface/Products'
import StarRating from '@/components/StarRating'
import ImageComponent from '@/components/ImageComponent'
import fetchProducts from '@/actions/fetchProducts'


const product = () => {
  const [product, setProduct] = useState<Product>()
  const [notfound, setNotFound] = useState(false)
  
  const params = useParams()
  
  const DATA_URL = `https://dummyjson.com/products/${params.productId}`

  useEffect(()=>{
    setNotFound(false)

    fetchProducts(DATA_URL).then((data)=>{
      //checks whether a there a product with that id
      //if not then throw an error and redirects to 404 page
      data.message? setNotFound(true) : setProduct(data)})
    .catch((error)=>console.log(error))

  },[DATA_URL])
  
  if(notfound){
    notFound()
  }

  return (
    <div className='min-h-screen max-w-[800px] mx-auto py-2 px-4'>
        <div className='grid grid-cols-1 gap-2 md:gap-1 sm:grid-cols-3'>
          <div className='col-span-1 sm:col-span-2 rounded-lg overflow-hidden'>
            <ImageComponent product={product!} />
          </div>
          <div className='col-span-1 rounded-lg overflow-hidden bg-gray-300 w-full p-2 mx-auto'>
            <h1 className='text-2xl'>{product?.title}</h1>
            <p className='text-xs'>by {product?.brand}</p>
            <StarRating rating={product?.rating!}/>
            <p className='text-xs text-gray-500 mt-1'>Price: <span className='text-base text-black'>${product?.price}</span>
              <span className='line-through ml-2'>${(product?.price! + (product?.price! * product?.discountPercentage!/100)).toFixed(2)}</span>
              <span className='text-xs font-semibold text-black ml-2'>NOW {product?.discountPercentage}% OFF</span>
            </p>
            <p className='text-xs text-gray-500 mt-3'>Description</p>
            <p>{product?.description}</p>
            <p className='text-xs mt-3 text-gray-600'>Stock: <span className='text-black'>{product?.stock}</span></p>
            <p className='text-xs mt-2 text-gray-600'>Category: {product?.category}</p>
          </div>
        </div>
    </div>
  )
}

export default product