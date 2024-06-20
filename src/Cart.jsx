import { useState } from "react"

export function getCart() {
  const [cart, setCart] = useState([]);
  return {cart, setCart}
}