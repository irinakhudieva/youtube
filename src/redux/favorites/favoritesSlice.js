import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, action) => {
            const isExists = state.favorites.some(item => item.id === action.payload.id);

            if(isExists) {
                const index = state.favorites.findIndex(item => item.id === action.payload.id);
                
                if(index !== -1) {
                    state.favorites.splice(index, 1);
                }
            } else {
                state.favorites = [action.payload, ...state.favorites];
            }
        }
    }
})


export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;