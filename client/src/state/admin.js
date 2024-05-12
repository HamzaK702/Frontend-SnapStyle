import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the admin slice
const initialState = {
  users: [],
  reports: [],
  systemSettings: {},
  // Add more initial state properties as needed
};

// Create the admin slice
export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    // Define reducer functions to handle actions on the admin state
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload.id);
    },
    addReport: (state, action) => {
      state.reports.push(action.payload);
    },
    updateSystemSettings: (state, action) => {
      state.systemSettings = { ...state.systemSettings, ...action.payload };
    },
    // Add more reducers as needed
    resetAdminState: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser, addReport, updateSystemSettings, resetAdminState } = adminSlice.actions;

// Export the reducer
export default adminSlice.reducer;
