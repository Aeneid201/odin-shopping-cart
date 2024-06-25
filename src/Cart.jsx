import { useOutletContext } from "react-router-dom";
import CartProduct from "./components/CartProduct";

export default function Cart() {
  const [cart, setCart] = useOutletContext();
  let total = 0;
  cart.map((item) => (total += item.price * item.quantity));

  function updateCart(e, id) {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === id)) {
        return prevCart.map((item) => {
          const newObj = Object.assign({}, item); // to avoid duplication
          if (item.id === id) return { ...newObj, quantity: e.target.value };
          else return newObj;
        });
      }
    });
  }

  function removeFromCart(id) {
    return setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  return (
    <section className="cart">
      <div className="bigger-container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((product) => {
                return (
                  <CartProduct
                    onClick={() => removeFromCart(product.id)}
                    key={product.id}
                    id={product.id}
                    total={product.price * product.quantity}
                    quantity={product.quantity}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    onChange={(e) => updateCart(e, product.id)}
                  />
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td>Grand Total</td>
              <td></td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
