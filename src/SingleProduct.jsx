import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import {useFetchSingle} from "./hooks/useFetch";

export default function SingleProduct() {

    const {productId} = useParams()
    const {product} = useFetchSingle(productId)
    const [cart, setCart] = useOutletContext()

    function addToCart(p) {
        setCart(prevCart => [...prevCart, p])
    }

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
                        <button onClick={() => addToCart(product)} className="btn btn-primary w-100">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}