import { configureStore } from '@reduxjs/toolkit';
import robotReducer from '../features/robot/robotSlice';

const store = configureStore({
  reducer: {
    robot: robotReducer,
  },
});

export default store;
