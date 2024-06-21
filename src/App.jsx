import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export const getProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {products, error, loading}
}

function App() {

  const {products, error, loading} = getProducts()
  const [cart, setCart] = useState([]);
  const itemsInCart = cart.length


  if(loading) return <p>Loading...</p>
  if(error) return <p>Network error!</p>

  
  return (
    <main className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Ouma Shop</h1>
            <p>Cart: {itemsInCart}</p>
          </div>
        </div>
      </div>
      <Outlet context={[cart, setCart]} />
    </main>
  )
}

export default App
