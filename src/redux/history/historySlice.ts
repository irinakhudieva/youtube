import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVideoItem } from "../../types/types";

type HistorySliceState = {
    history: IVideoItem[];
}

const initialState: HistorySliceState = {
    history: []
};
    

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addToHistory: (state, {payload}: PayloadAction<IVideoItem>) => {
            const findItem = state.history.find(item => item.id.videoId === payload.id.videoId);

            if (findItem) {
                const index = state.history.findIndex(item => item.id.videoId !== payload.id.videoId);
                state.history.splice(index, 1);
                
            } else {
                state.history = [payload, ...state.history];
            }  
        },
        clearHistory (state) {
            state.history.length = 0;
        }  
    }

})

export const { addToHistory, clearHistory } = historySlice.actions;

export default historySlice.reducer;
