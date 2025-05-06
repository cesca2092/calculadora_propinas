import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {

  const [useOrder, setUseOrder] = useState<OrderItem[]>([])
  const [total, setTotal] = useState(0)


  return {

  }
}