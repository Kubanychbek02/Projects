import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    count: number
}

const initialState: UserState = {
    count: 0
}

export const userSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        },
        decrement(state, action: PayloadAction<number>) {
            state.count -= action.payload
        }
    },
    extraReducers: {}
})

export default userSlice.reducer;
