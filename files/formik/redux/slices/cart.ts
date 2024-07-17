import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
      state.totalAmount += action.payload.price
    },
    removeItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        state.totalAmount -= state.items[index].price
        state.items.splice(index, 1)
      }
    },
  },
})

export const { addItem, removeItem } = cart.actions
export default cart.reducer
