'use client'
import fetchProducts from "@/actions/fetchProducts"
import {  useEffect, useState, useCallback } from "react"
import ListComponent from "@/components/ListComponent"

import { Products } from "@/interface/Products"


const Prdcts = () => {
  const [products, setProducts] = useState<Products>()
  const [count, setCount] = useState(10)
  const DATA_URL = `https://dummyjson.com/products?limit=${count}`
  
  useEffect(()=>{
      fetchProducts(DATA_URL).then((data)=>setProducts(data))
      .catch((error)=>console.log(error))
  },[count])

  //I implemented lazy loading here, at first it fetches 10 items only set
  //by count variable. Then whenever you scroll down below the set limit
  //loadMore function is called to add 5 items to count then fetchProducts
  //is called again to fetch more data
  const loadMore = useCallback(() =>{
    setCount(prev => prev + 5)
  },[])

  return (
    <div className="min-h-screen max-w-[800px] mx-auto py-2 px-4">
      <div className="mb-1">Products</div>
      <ListComponent products={products!} loadMore={loadMore}/>
    </div>
  )
}

export default Prdcts