import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  error: null,
  loading: false,
  details: {},
}

const getOrdersReducers = {
  getOrders: (state) => {
    state.data = []
    state.error = null
    state.loading = true
  },
  getOrdersSuccess: (state, action) => {
    state.data = action.payload
    state.error = null
    state.loading = false
  },
  getOrdersError: (state, action) => {
    state.data = []
    state.error = action.payload
    state.loading = false
  },
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    ...getOrdersReducers,
    getOrderDetails: (state, action) => {
      state.details = action.payload
    },
    getMoreSuccess: (state, action) => {
      state.data = [...state.data, ...action.payload]
      state.error = null
      state.loading = false
    },
    getFilterOrders: (state, action) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  getOrders,
  getOrdersSuccess,
  getOrdersError,
  getFilterOrders,
  getOrderDetails,
  getMoreSuccess,
} = ordersSlice.actions

export default ordersSlice.reducer
