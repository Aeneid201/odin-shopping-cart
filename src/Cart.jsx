import { useOutletContext } from "react-router-dom";
import CartProduct from "./components/CartProduct";
import { useFetchSingle } from "./hooks/useFetch";
import { useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  function removeFromCart(id) {
    return setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  return (
    <section className="cart">
      <div className="bigger-container">
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart &&
            cart.map((product) => {
              return (
                <CartProduct
                  onClick={() => removeFromCart(product.id)}
                  key={product.id}
                  id={product.id}
                  total={product.price}
                  quantity={product.quantity}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
        </table>
      </div>
    </section>
  );
}
