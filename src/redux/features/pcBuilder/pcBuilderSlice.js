import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buildItem: [],
};

const pcBuilderSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    addBuildItem: (state, action) => {
      state.buildItem = action.payload;
    },
  },
});

export default pcBuilderSlice;
export const { addBuildItem } = pcBuilderSlice.actions;
