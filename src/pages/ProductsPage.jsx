import React, { useEffect, useState } from 'react'
import { useProducts } from '../context/ProductContext'
import styles from "./ProductsPage.module.css"
import Card from '../components/Card'
import Loader from '../components/Loader'


import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from '../helpers/helper'
import { useSearchParams } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import Sidebar from '../components/Sidebar'

function ProductsPage() {
  const products=useProducts();
 const[displayed,setDisplayed]=useState([])
  const[search,setSearch]=useState("");
  const[query,setQuery]=useState({})
  const[searchParams,setSearchParams]=useSearchParams()

  useEffect(()=>{
    setDisplayed(products);
    
    setQuery(getInitialQuery(searchParams))
  },[products])

  useEffect(()=>{
    setSearchParams(query)
    setSearch(query.search || "")
   let finalProducts=searchProducts(products,query.search)
  // console.log(finalProducts)
  finalProducts=filterProducts(finalProducts,query.category)
   setDisplayed(finalProducts)
  },[query])

 

  
 
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
      <div className={styles.products}>
        {!displayed.length && <Loader/>}
        {displayed.map(p=>(<Card key={p.id} data={p}/>))}

      </div>
      <Sidebar query={query} setQuery={setQuery}/>
    </div>
    </>

  
  )
}

export default ProductsPage