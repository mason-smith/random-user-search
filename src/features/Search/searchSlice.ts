import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Local Dependencies
import { RandomUserState, User } from './types';

const initialState: RandomUserState = {
  isLoading: false,
  error: null,
  randomUsers: [],
};

const startLoading = (state: RandomUserState) => {
  state.isLoading = true;
};

const loadingFailed = (
  state: RandomUserState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    requestRandomUsersPending: startLoading,
    requestRandomUsersSuccess: (
      state: RandomUserState,
      action: PayloadAction<User[]>
    ) => {
      return {
        ...state,
        randomUsers: action.payload.sort((a: User, b: User) =>
          a.name.last.toLowerCase() > b.name.last.toLowerCase()
            ? 1
            : b.name.last.toLowerCase() > a.name.last.toLowerCase()
            ? -1
            : 0
        ),
        isLoading: false,
      };
    },
    requestRandomUsersFailure: loadingFailed,
  },
});

export const {
  requestRandomUsersPending,
  requestRandomUsersSuccess,
  requestRandomUsersFailure,
} = searchSlice.actions;

export default searchSlice.reducer;
