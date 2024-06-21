import { useOutletContext } from "react-router-dom"
import CartProduct from './components/CartProduct'

export default function Cart() {
    const [cart, setCart] = useOutletContext()

    function removeFromCart(id) {
        return setCart(prevCart => prevCart.filter(p => p.id !== id))
    }

    return(
        <section className="cart">
            <div className="container div row">
                <div className="col-12">
                   {cart &&
                    cart.map(product => {
                        return (<CartProduct key={product.id} id={product.id} total={product.price} quantity="1" title={product.title} category={product.category} image={product.image} rating={product.rating.rate} price={product.price} />)
                    })
                   }
                </div>
            </div>
        </section>
    )
}