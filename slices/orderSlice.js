import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  error: null,
  loading: true,
  details: null,
}

const getOrdersReducers = {
  getOrders: (state) => {
    state.data = []
    state.error = null
  },
  getLoadingTrue: (state) => {
    state.loading = true
  },
  getLoadingFalse: (state) => {
    state.loading = false
    console.log('getLoadingFalse')
  },
  getOrdersSuccess: (state, action) => {
    state.data = action.payload
    state.error = null
  },
  getOrdersError: (state, action) => {
    state.data = []
    state.error = action.payload
    state.loading = false
    console.log('getOrdersError')
  },
}

const getOrderDetailsReducer = {
  getOrderDetails: (state) => {
    state.details = null
    state.error = null
    state.loading = true
  },

  getOrderDetailsSuccess: (state, action) => {
    state.details = action.payload
    state.error = null
    state.loading = true
  },
  getOrderDetailsError: (state, action) => {
    state.details = null
    state.error = action.payload
    state.loading = false
    console.log('getOrderDetailsError', action.payload)
  },
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    ...getOrdersReducers,
    ...getOrderDetailsReducer,
    // getOrderDetails: (state, action) => {
    //   state.details = action.payload
    // },
    getMoreSuccess: (state, action) => {
      state.data = [...state.data, ...action.payload]
      state.error = null
      state.loading = false
      console.log('getMoreSuccess')
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
  getOrderDetailsSuccess,
  getOrderDetailsError,
  getLoadingTrue,
  getLoadingFalse,
} = ordersSlice.actions

export default ordersSlice.reducer
