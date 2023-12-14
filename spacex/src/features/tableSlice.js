
import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    currentPage: 1,
    sort: null,
    sortDirection: 'asc',
    filterData: [],
  },
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sort = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    setFilterData: (state, action) => {
        state.filterData = action.payload;
    }
  },
});

export const { setCurrentPage, setSortBy, setSortDirection, setFilterData } = tableSlice.actions;

export default tableSlice.reducer;
