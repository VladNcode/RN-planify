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

interface TasksState {
  data: Task[];
}

const initialState: TasksState = {
  data: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFirebaseTasks: (state, action: PayloadAction<Task[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setFirebaseTasks } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.data;

export default tasksSlice.reducer;
