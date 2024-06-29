import { useQuery } from "@tanstack/react-query";
import ProductComponent from "../components/Product";
import { useOutletContext } from "react-router-dom";
import loadingImg from "../assets/images/loading.gif";

export function Product({ id }) {
  const [cart, setCart] = useOutletContext();

  console.log(cart);

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

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading)
    return (
      <div className="loading">
        <img src={loadingImg} alt="loading image" />
      </div>
    );
  if (isError) return "An error has occurred: " + error.message;

  return (
    <section className="single--product">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-4 col-sm-12 col-12">
            <img src={data.image} alt={data.title} />
          </div>

          <div className="col-lg-7 col-md-8 col-sm-12 col-12">
            <div className="description ps-lg-3 ps-sm-0">
              <span className="category badge rounded-pill bg-light text-dark mb-3">
                {data.category}
              </span>
              <h3 className="price mb-2">${data.price}</h3>

              <h1>{data.title}</h1>
              <p>{data.description}</p>

              <button
                onClick={() => addToCart(data)}
                className="shop--btn d-block mb-3"
              >
                {isInCart(data.id) ? "Added to cart ✓" : "Add to cart +"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  const [cart, setCart] = useOutletContext();

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

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

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/`).then((res) => res.json()),
  });

  if (isLoading)
    return (
      <div className="loading">
        <img src={loadingImg} alt="loading image" />
      </div>
    );
  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      {data.map((p) => (
        <ProductComponent
          onClick={() => addToCart(p)}
          key={p.id}
          id={p.id}
          title={p.title}
          category={p.category}
          image={p.image}
          rating={p.rating.rate}
          price={p.price}
          text={isInCart(p.id) ? "Added to cart ✓" : "Add to cart +"}
        />
      ))}
    </>
  );
}
