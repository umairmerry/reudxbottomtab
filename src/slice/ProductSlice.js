import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    value: 5,
    name: "awais",
    newProduct: [],
    data:[]
}




export const productSlice = createSlice({
    name: 'product',
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
        }


    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = productSlice.actions

export default productSlice.reducer;


export const FetchData = createAsyncThunk("Product/fetch", async () => {
    try {
        const response = await fetch(
          'https://reactnative.dev/movies.json',
        );
        const json = await response.json();
        console.log("ggg",json);
       
        return json.movies;
      } catch (error) {
        console.error(error);
      }
});