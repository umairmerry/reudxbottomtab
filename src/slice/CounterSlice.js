import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10,
    name: "awais",
    newProduct: []
}




export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        plusfv: (state) => {
            state.value += 5
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload


        },
        add: (state, action) => {
            state.newProduct.push(action.payload)

        },

        dele: (state, action) => {
            return state.newProduct.filter((item,index) => index !== action.payload
            )

        }

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, plusfv, incrementByAmount, add, dele } = counterSlice.actions

export default counterSlice.reducer



