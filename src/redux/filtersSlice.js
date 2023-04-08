import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterValue } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
