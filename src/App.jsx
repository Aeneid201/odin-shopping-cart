import { useState, useEffect } from 'react'

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


  if(loading) return <p>Loading...</p>
  if(error) return <p>Network error!</p>

  
  return (
    <>
      <h1>Shopping cart</h1>
    </>
  )
}

export default App
