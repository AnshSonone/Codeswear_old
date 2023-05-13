import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps, }) {
  const [cart, setCart] = useState({})
  const [Subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    console.log('hey i am useeffect')
    try{
      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    }catch{
      console.error(error)
      localStorage.clear()
    }
    console.log(setCart)
  }, [])
  

  const saveCart = (mycart) => {
    localStorage.setItem('cart', JSON.stringify(mycart))
    let subt = 0
    let keys  = Object.keys(mycart)
    for (let i = 0; i<keys.length; i++) {
      subt += mycart[keys[i].price * mycart[keys[i].qty]];
    }
    setSubtotal(subt)
  }

    const addTocart =  (itemcode, price, qty, size, name, color) =>{
      let newCart = JSON.parse(JSON.stringify(cart))
      if(itemcode in cart){
        newCart[itemcode].qty = cart[itemcode].qty + 1
      }
      else{
        newCart[itemcode] = {qty: 1, price, size, name, color}
      }
      console.log()
      setCart(newCart)
      saveCart(newCart)
    }

  const clearCart = () =>{
    setCart({})
    saveCart({})
  }

  const removeFromcart =  (itemcode, price, qty, size, name, color) =>{
    let newCart = JSON.parse(JSON.stringify(cart))
    if(itemcode in cart){
      newCart[itemcode].qty = cart[itemcode].qty - 1
    }
    if(newCart[itemcode]['qty']<=0){
      delete newCart[itemcode]
    }
    console.log(qty)
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
  <Navbar cart={cart} addTocart={addTocart} removeFromcart={removeFromcart} clearCart={clearCart} Subtotal={Subtotal} />
  <Component cart={cart} addTocart={addTocart} removeFromcart={removeFromcart} clearCart={clearCart} Subtotal={Subtotal} {...pageProps} />
  <Footer/>
  </>
}
