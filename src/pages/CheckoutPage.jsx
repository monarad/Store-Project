import React from 'react'
import { useCart } from '../context/CartContext'
import BasketCard from '../components/BasketCard';
import BasketSidebar from '../components/BasketSidebar';
import styles from "./CheckoutPage.module.css"
import { BsCartDash } from "react-icons/bs";

function CheckoutPage() {
  const[state,dispatch]=useCart();
  //console.log(state)
  const clickHandler=(type,payload)=>{
    dispatch({type,payload})

  }
  if(!state.itemsCounter){
    return(
      <div className={styles.container1}>
        <p style={{color:"gray",fontSize:30 ,textAlign:'center',alignItems:'center'}}>Empty Cart</p>
       <div><BsCartDash style={{color:"gray",fontSize:100 ,alignItems:'center'}} /></div> 
      </div>
    )
  }
  return (
    <div  className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>{state.selectedItems.map((product)=>(<BasketCard key={product.id} data={product} clickHandler={clickHandler}/>))}</div>
    </div>
  )
}

export default CheckoutPage