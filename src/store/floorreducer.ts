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
    changeAccess: (state, action: PayloadAction<number>) => {
      const floorIndex = action.payload;
      if (floorIndex >= 0 && floorIndex < state.floors.length) {
        state.floors[floorIndex] = !state.floors[floorIndex];
      }
    },
  },
});

export const { changeAccess: changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
