import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Future slices will go here (e.g., reviews: reviewReducer)
  },
  // Redux Toolkit automatically adds good default middleware (like thunk)
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false, // Useful if you plan to store complex date objects
    }),
});