import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        deleteUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        }
      },
      
})

export const { setUser, deleteUser } = authSlice.actions;

export default authSlice.reducer;
