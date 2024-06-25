import { Link } from "react-router-dom";

export default function CartProduct(props) {
  return (
    <tr className="cart--product">
      <td>
        <div className="img d-flex align-items-center">
          <Link to={`/products/${props.id}`}>
            <img src={props.image} alt={props.title} />
          </Link>
          <div className="details ps-4">
            <p className="title">{props.title}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="quantity">
          <button onClick={props.onClick} className="trash">
            🗑️
          </button>
          <span>
            <input
              name="quantity"
              value={props.quantity}
              onChange={props.onChange}
            />
          </span>
        </div>
      </td>
      <td>
        <div className="total">
          <p>${props.total}</p>
        </div>
      </td>
    </tr>
  );
}
