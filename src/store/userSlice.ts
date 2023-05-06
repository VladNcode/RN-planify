import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
interface UserState {
  data: FirebaseAuthTypes.User | null;
}

// Define the initial state using that type
const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFirebaseUser: (state, action: PayloadAction<FirebaseAuthTypes.User | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setFirebaseUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
