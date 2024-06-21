import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {useFetchAll} from './hooks/useFetch'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const {products, error, loading} = useFetchAll()
  const [cart, setCart] = useState([]);
  const itemsInCart = cart.length

  if(loading) return <p>Loading...</p>
  if(error) return <p>Network error!</p>
  
  return (
    <>
    <Header/>
    <main className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Ouma Shop</h1>
            <p>Items in cart: {itemsInCart}, <Link to="cart">View Cart</Link></p>
          </div>
        </div>
      </div>
      <Outlet context={[cart, setCart]} />
    </main>
    <Footer/>
    </>
  )
}

export default App
