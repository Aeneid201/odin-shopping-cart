import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4">
      <div className="product">
        <div className="img position-relative">
          <Link to={`/products/${props.id}`}>
            <img src={props.image} alt={props.title} />
          </Link>
        </div>
        <div className="info">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button
              onClick={props.onClick}
              data-id={props.id}
              className="shop--btn"
            >
              {props.text}
            </button>
            <p className="price mb-0">${props.price}</p>
          </div>
          <p className="title mb-2">{props.title}</p>
        </div>
      </div>
    </div>
  );
}
