//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Role =
  | "Unknown Personnel"
  | "Guest"
  | "Student"
  | "Developer"
  | "Executive Personnel";

interface RoleState {
  currentRole: Role;
}

const initialState: RoleState = {
  currentRole: "Unknown Personnel",
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      const allowedRoles: Role[] = [
        "Unknown Personnel",
        "Guest",
        "Student",
        "Developer",
        "Executive Personnel",
      ];
      if (allowedRoles.includes(action.payload)) {
        state.currentRole = action.payload;
      } else {
        console.log("Invalid role provided");
      }
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
