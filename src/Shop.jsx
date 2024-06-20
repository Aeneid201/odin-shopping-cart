import { getProducts } from "./App"
import Product from "./components/Product"


export default function Shop() {

const {products, error, loading} = getProducts()

  if(loading) return <p>Loading...</p>
  if(error) return <p>Network error!</p>

    return(
       <section>
         <div className="container">
            <div className="row">
            <div className="col-12 text-center mb-3">
                <h1>Shop</h1>
            </div>
            </div>

            <div className="row">
                {products && products.map(p => <Product key={p.id} id={p.id} title={p.title} category={p.category} image={p.image} rating={p.rating.rate} price={p.price} />)}
            </div>
         </div>
       </section>
    )
}