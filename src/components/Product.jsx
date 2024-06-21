import { Link } from "react-router-dom"

export default function Product(props) {
    return(
        <div className="col-lg-4 col-sm-6 col-12 mb-3 product">
            
            <div className="img">
                    <Link to={`/products/${props.id}`}>
                    <img src={props.image} alt={props.title} />
                    </Link>
                    <div className="category">{props.category}</div>
                    <div className="rate">{props.rating} / 5</div>
                    <button onClick={props.onClick} data-id={props.id} className="btn btn-primary w-100">Add to cart</button>
                </div>
                <div className="info d-flex justify-content-between align-items-center">
                    <p className="title">{props.title}</p>
                    <p className="price">${props.price}</p>
                </div>
            
        </div>
    )
}