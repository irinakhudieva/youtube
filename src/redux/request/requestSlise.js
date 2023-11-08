import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    request: []
}

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        addRequest(state, action) {
          if(state.request.length < 4) {
            state.request = [action.payload, ...state.request];
          } else {
            state.request.pop();
            state.request = [action.payload, ...state.request];
          }
          
        },
        deleteRequest(state, action) {
          const findIndex = state.request.filter((item, idx) => item !== action.payload);
          state.request.splice(findIndex, 1);
        }
      },
      
})

export const { addRequest, deleteRequest } = requestSlice.actions;

export default requestSlice.reducer;
