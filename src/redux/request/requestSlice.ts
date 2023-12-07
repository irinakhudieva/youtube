import { createSlice } from "@reduxjs/toolkit";

type Request = string;

interface RequestSliceState {
  request: Request[]
}

const initialState: RequestSliceState = {
  request: []
}

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        addRequest(state, {payload}) {
          if(state.request.length < 4) {
            state.request = [payload, ...state.request];
          } else {
            state.request.pop();
            state.request = [payload, ...state.request];
          }
          
        },
        deleteRequest(state, {payload}) {
          const findIndex = state.request.findIndex((item) => item !== payload);
          state.request.splice(findIndex, 1);
        }
      },
      
})

export const { addRequest, deleteRequest } = requestSlice.actions;

export default requestSlice.reducer;
