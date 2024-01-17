import React from 'react'
import { Link } from 'react-router-dom';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from '../context/CartContext';
import styles from "./Layout.module.css"
import { FiHeart } from "react-icons/fi";

function Layout({children}) {
    const [state]=useCart()
  return (
    <>
    <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <Link to="/checkout">
            <div>
            <PiShoppingCartSimpleBold />
        {!!state.itemsCounter &&  <span>{state.itemsCounter}</span>}
        
            </div>
           
       
        </Link>
    </header>
    {children}
    <footer  className={styles.footer}>
        <p>Developed by Mona with  </p>
        <FiHeart style={{color:"white",fontSize:25}} />
        
        
    </footer>
    </>
  )
}

export default Layout