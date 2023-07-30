import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buildItem: [],
};

const pcBuilderSlice = createSlice({
  name: 'pcBuidler',
  initialState,
  reducers: {
    addBuildItem: (state, action) => {
      const itemExists = state.buildItem.some(
        (item) => item.id === action.payload.id || item.category === action.payload.category
      );
      if (!itemExists) {
        state.buildItem.push(action.payload);
      }
    },
  },
});

export default pcBuilderSlice;
export const { addBuildItem } = pcBuilderSlice.actions;
