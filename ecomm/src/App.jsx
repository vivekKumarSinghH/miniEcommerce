import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import ProductPage from './components/ProductPage'
import SingleProduct from './components/SingleProduct'
import CartPage from './components/CartPage'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
     <div  className="flex justify-around bg-black h-[50px] text-2xl items-center text-white">
    
    <Link to="/">Products</Link>
    <Link to="/product/:id">Single Product</Link>
    <Link to="/cart">Cart</Link>
 
    </div>

<Routes>

<Route path="/" element={<ProductPage/>}/>
<Route path="/product/:id" element={ <SingleProduct/>}/>
<Route path="/cart" element={ <CartPage/>}/>
</Routes>
    </div>
  )
}

export default App
