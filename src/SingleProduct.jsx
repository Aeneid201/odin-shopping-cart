import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useFetchSingle } from "./hooks/useFetch";

export default function SingleProduct() {
  const { productId } = useParams();
  const { product } = useFetchSingle(productId);
  const [cart, setCart] = useOutletContext();

  function addToCart(p) {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === p.id)) {
        return prevCart.map((item) => {
          const newObj = Object.assign({}, item); // to avoid duplication
          if (item.id === p.id)
            return { ...newObj, quantity: (newObj.quantity += 1) };
          else return newObj;
        });
      } else {
        return [...prevCart, { ...p, quantity: 1 }];
      }
    });
  }

  return (
    <section className="single--product">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12 col-12">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="col-lg-7 col-md-8 col-sm-12 col-12">
            <div className="description ps-lg-3 ps-sm-0">
              <span className="category badge rounded-pill bg-light text-dark mb-3">
                {product.category}
              </span>
              <h3 className="price mb-2">${product.price}</h3>

              <h1>{product.title}</h1>
              <p>{product.description}</p>

              <button
                onClick={() => addToCart(product)}
                className="shop--btn d-block mb-3"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
