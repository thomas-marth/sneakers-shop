import './App.css'
import { Routes, Route } from 'react-router'
import Header from "./components/header"
import Main from "./pages/main"
import Contacts from "./pages/contacts"
import Cart from "./pages/cart"
import CartProvider from './context/cartContext'

function App() {
 

  return (
    <CartProvider>
      <div className='app'>
    <Header />
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
    {/* footer */}
    </div>
      </CartProvider>
  )
}

export default App
