import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../redux/slices/cart'

const CartPage = () => {
  const items = useSelector((state) => state.cart.items)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const dispatch = useDispatch()

  const handleAddItem = () => {
    const newItem = { id: new Date().toISOString(), name: 'Item', price: 10 }
    dispatch(addItem(newItem))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  )
}

export default CartPage
