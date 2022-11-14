import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  error: null,
  loading: false,
  details: [],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.data = action.payload
      state.error = null
    },
    getOrderDetails: (state, action) => {
      state.details = action.payload
    },
    getMoreOrders: (state, action) => {
      state.data = [...state.data, ...action.payload]
    },
    getFilterOrders: (state, action) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getOrders, getMoreOrders, getFilterOrders } = ordersSlice.actions

export default ordersSlice.reducer
