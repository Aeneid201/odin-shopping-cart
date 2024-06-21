import { Link } from "react-router-dom"

export default function CartProduct(props) {
    return(
        <div className="col-12 mb-3">
            <div className="cart--product">
            <div className="img d-flex align-items-center">
                    <Link to={`/products/${props.id}`}>
                    <img src={props.image} alt={props.title} />
                    </Link>
                    <div className="details ps-4">
                        <p className="title">{props.title}</p>
                        <div className="category">{props.category}</div>
                        <div className="rate">{props.rating} / 5</div>
                    </div>
                    
                </div>
                <div className="quantity">
                    <h3>Quantity</h3>
                <button onClick={props.onClick} className="btn btn-primary">🗑️</button>
                    <span>{props.quantity}</span>
                </div>
                <div className="total">
                    <h3>Total</h3>
                    <p>${props.total}</p>
                </div>
            </div>
            
        </div>
    )
}