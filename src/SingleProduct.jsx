import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "./Cart";

export const getProduct = (id) => {
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
        .then((response) => {
            console.log(response)
            return setProduct(response)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
  
    return {product, error, loading}
  }

export default function SingleProduct() {

    const {productId} = useParams()
    const {product} = getProduct(productId)

    return(
        <section className="single--product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="description">
                            <p className="category">{product.category}</p>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4 col-sm-12 col-12">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                        <button onClick={addToCart} data-id={product.id} className="btn btn-primary w-100">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}