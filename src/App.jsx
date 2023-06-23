import './app.css'
import DetailProduct from './components/container/detailProduct/detailProduct'
import Images from './components/container/images/images'
import ProductContainer from './components/container/productContainer/ProductContainer'
import Cart from './components/pure/cart/Cart'
import Header from './components/pure/header/Header'
import {CartProvider} from './context/cart.context'

function App() {

  return (
    <>
    <CartProvider>
      <Header/>
      <ProductContainer/>
      <Cart/>
    </CartProvider>
    </>
  )
}

export default App
