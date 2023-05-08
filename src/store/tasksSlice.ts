import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Task {
  id: string;
  completed: boolean;
  title: string;
  tag: string;
  deadline: { nanoseconds: number; seconds: number };
}

// Define a type for the slice state
interface TasksState {
  data: Task[];
}

// Define the initial state using that type
const initialState: TasksState = {
  data: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFirebaseTasks: (state, action: PayloadAction<Task[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setFirebaseTasks } = tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTasks = (state: RootState) => state.tasks.data;

export default tasksSlice.reducer;
