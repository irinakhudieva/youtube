import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history: []
};
    

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addToHistory: (state, action) => {
            const findItem = state.history.find(item => item.id === payload.id);

            if (findItem) {
                const index = state.history.findIndex(item => item.id !== action.payload.id);
                state.history.splice(index, 1);
                state.history = [action.payload, ...state.history];
            } else {
                state.history = [action.payload, ...state.history];
            }  
        },
        clearHistory (state, action) {
            state.history.length = 0;
        }
        
    }

})

export const { addToHistory } = historySlice.actions;

export default historySlice.reducer;
