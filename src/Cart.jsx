import { useOutletContext } from "react-router-dom"
import CartProduct from './components/CartProduct'
import { useFetchSingle } from "./hooks/useFetch"

export default function Cart() {
    const [cart, setCart] = useOutletContext()
    const arr = [];

    cart.map(item => {
        const {product} = useFetchSingle(item.id)
        arr.push(product)
    })

    function removeFromCart(id) {
        console.log('remove item', id);
        const index = arr.find(item => item.id === id)
        arr.splice(index, 1)
        return setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    return(
        <section className="cart">
            <div className="container div row">
                <div className="col-12">
                   {arr &&
                    arr.map(product => {
                        //const itemFromCart = cart.find(item => item.id === product.id) ?? {}
                        return (<CartProduct onClick={() => removeFromCart(product.id)} key={product.id} id={product.id} total={product.price} quantity="1" title={product.title} category={product.category} rating={product.rating?.rate} image={product.image}  price={product.price} />)
                    })
                   }
                </div>
            </div>
        </section>
    )
}