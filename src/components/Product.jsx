import { Link } from "react-router-dom"

export default function Product(props) {
    return(
        <div className="col-lg-4 col-sm-6 col-12 mb-3 product">
            <Link to={`shop/${props.id}`}>
            <div className="img">
                    <img src={props.image} alt={props.title} />
                    <div className="category">{props.category}</div>
                    <div className="rate">{props.rating} / 5</div>
                </div>
                <div className="info d-flex justify-content-between align-items-center">
                    <p className="title">{props.title}</p>
                    <p className="price">${props.price}</p>
                </div>
            </Link>
        </div>
    )
}