import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero';
import Items from './Components/Items/Items';
import { Route, Routes } from 'react-router';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart'

function App() {

  return (
    <>
      <div>
      <Hero/>
      {/* <Items/> */}
        {/* <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="men"/>}/>
          <Route path='/womens' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path='/productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes> */}
      </div>
    </>
  )
}

export default App
