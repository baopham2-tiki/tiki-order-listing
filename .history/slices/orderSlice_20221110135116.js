import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    error: null,
    loading: false
};



export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        getOrders: (state, action) => {
            state.data = action.payload;
        },
        getOrderDetails: (state, action) => {
            state.data = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { getOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
