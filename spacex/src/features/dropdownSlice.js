
import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    dropdown1Value: '',
    dropdown2Value: '',
    options2: [],
    rocketData: {}
  },
  reducers: {
    setDropdown1Value: (state, action) => {
      state.dropdown1Value = action.payload;
    },
    setDropdown2Value: (state, action) => {
      state.dropdown2Value = action.payload;
    },
    setOptions2: (state, action) => {
        state.options2 = action.payload;
      },
      setRocketData: (state, action) => {
        state.rocketData = action.payload;
      }
  },
});

export const { setDropdown1Value, setDropdown2Value, setOptions2, setRocketData } = dropdownSlice.actions;

export default dropdownSlice.reducer;
