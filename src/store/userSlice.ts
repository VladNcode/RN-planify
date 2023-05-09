import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UserState {
  data: FirebaseAuthTypes.User | null;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirebaseUser: (state, action: PayloadAction<FirebaseAuthTypes.User | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setFirebaseUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
