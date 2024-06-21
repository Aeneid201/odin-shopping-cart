import { getProducts } from "./App"
import Product from "./components/Product"
import { useLoaderData, Outlet, useOutlet, useOutletContext } from "react-router-dom"


export default function Shop() {

const {products, error, loading} = getProducts()
const [cart, setCart] = useOutletContext()

function addToCart(id) {
  setCart(prevCart => [...prevCart, id])
  console.log(cart)
}

  if(loading) return <p>Loading...</p>
  if(error) return <p>Network error!</p>

    return(
      
       <section>
        
         <div className="container">
            <div className="row">
                {products && products.map(p => <Product onClick={() => addToCart(p.id)} key={p.id} id={p.id} title={p.title} category={p.category} image={p.image} rating={p.rating.rate} price={p.price} />)}
            </div>
         </div>
       </section>
    )
}