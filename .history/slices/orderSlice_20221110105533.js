import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    error: null,
    loading: false
};



export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        getOrders: (state, action) => {
            state.orders = action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ordersSlice.actions;

export default ordersSlice.reducer;
