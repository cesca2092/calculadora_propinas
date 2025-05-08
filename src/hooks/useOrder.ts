import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {

    const itemExists = order.findIndex(orderItem => orderItem.id === item.id)
    if (itemExists === -1) {
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    } else {
      const copyOrder = order.map(el => el)
      copyOrder[itemExists].quantity += 1
      setOrder(copyOrder)
    }

  }

  const removeItem = (id: MenuItem['id']) => {
    const newItems = order.filter(item => item.id !== id)
    setOrder(newItems)
  }

  return {
    order,
    addItem,
    removeItem,
  }
}