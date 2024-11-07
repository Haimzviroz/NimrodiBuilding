import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorState {
  floors: boolean[];
}

const initialState: FloorState = {
  floors: [false, false, false, false, false],
};

const floorSlice = createSlice({
  name: "floor",
  initialState,
  reducers: {
    changeAccessByindex: (state, action: PayloadAction<number>) => {
      const floorIndex = action.payload;
      if (floorIndex >= 0 && floorIndex < state.floors.length) {
        state.floors[floorIndex] = !state.floors[floorIndex];
      }
    },
  },
});

export const { changeAccessByindex: changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
