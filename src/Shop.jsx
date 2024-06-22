import Product from "./components/Product";
import { useOutletContext } from "react-router-dom";
import { useFetchAll } from "./hooks/useFetch";
import loadingImg from "../src/assets/images/loading.gif";

export default function Shop() {
  const { products, error, loading } = useFetchAll();
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

  if (loading)
    return (
      <div className="loading">
        <img src={loadingImg} alt="loading image" />
      </div>
    );
  if (error) return <p>Network error!</p>;

  return (
    <section>
      <div className="bigger-container">
        <div className="row">
          {products &&
            products.map((p) => (
              <Product
                onClick={() => addToCart(p)}
                key={p.id}
                id={p.id}
                title={p.title}
                category={p.category}
                image={p.image}
                rating={p.rating.rate}
                price={p.price}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
