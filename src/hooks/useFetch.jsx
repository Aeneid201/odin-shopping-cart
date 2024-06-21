import { useState, useEffect } from "react"

export function useFetchSingle (id) {
    const [product, setProduct] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setProduct(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
  
    return {product, error, loading}
  }

  export function useFetchAll() {
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