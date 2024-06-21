import Product from "./components/Product"
import {useOutletContext } from "react-router-dom"
import { useFetchAll } from "./hooks/useFetch"

export default function Shop() {

const {products, error, loading} = useFetchAll()
const [cart, setCart] = useOutletContext()

function addToCart(p) {
  setCart(prevCart => {
    if(prevCart.some(item => item.id === p.id)){
      return prevCart.map(item => {
        const newObj = Object.assign({}, item) // to avoid duplication
        if(item.id === p.id) return {...newObj, quantity: newObj.quantity+=1};
        else return newObj
      })
    }else {
      return [...prevCart, {id: p.id, quantity: 1}]
    }
  })
}

  if(loading) return <p>Loading...</p>
  if(error) return <p>Network error!</p>

    return(
      
       <section>
        
         <div className="container">
            <div className="row">
                {products && products.map(p => <Product onClick={() => addToCart(p)} key={p.id} id={p.id} title={p.title} category={p.category} image={p.image} rating={p.rating.rate} price={p.price} />)}
            </div>
         </div>
       </section>
    )
}