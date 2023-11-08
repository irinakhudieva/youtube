import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   searchValue: '',
   categoryItem: '' 
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        }
    }
      
})

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;