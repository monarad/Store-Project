import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductDetails } from '../context/ProductContext';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./DetailsPage.module.css"

function DetailsPage() {
   const {id}=useParams();
   const productDetails=useProductDetails(+id);
  console.log(productDetails)
   if(!productDetails) return <Loader/>
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>{productDetails.category}</p>
        <SiOpenproject />
       
       
        <div>
          <span className={styles.price}>
          <IoMdPricetag />
          {productDetails.price}</span>
         <Link to="/products">
         <FaArrowLeft />
         <span>Back to Shop</span> 
         </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage