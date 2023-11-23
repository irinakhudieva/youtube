import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVideoItem } from "../../types/types";

type FavoriteSliceState = {
    favorite: IVideoItem[]
}

const initialState: FavoriteSliceState = {
    favorite: []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleFavorite: (state, {payload}: PayloadAction<IVideoItem>) => {
            const isExists = state.favorite.some(item => item.id.videoId === payload.id.videoId);

            if(isExists) {
                const index = state.favorite.findIndex(item => item.id.videoId  === payload.id.videoId);
                
                if(index !== -1) {
                    state.favorite.splice(index, 1);
                }
            } else {
                state.favorite = [payload, ...state.favorite];
            }
        }
    }
})


export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;