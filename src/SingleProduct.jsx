import { useParams } from "react-router-dom";
import { Product } from "./queries/queries";

export default function SingleProduct() {
  const { productId } = useParams();

  return <Product id={productId} />;
}
