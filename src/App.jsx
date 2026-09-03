import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import HowItWorks from './pages/HowItWorks'
import Applications from './pages/Applications'
import Docs from './pages/Docs'
import FAQ from './pages/FAQ'
import Support from './pages/Support'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import OrderTracking from './pages/OrderTracking'
import ScrollToTop from './components/ScrollToTop'
import CartNotification from './components/CartNotification'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartNotification />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success/:orderNumber" element={<OrderSuccess />} />
        <Route path="/track-order/:token" element={<OrderTracking />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App