import axios from 'axios';
import { AppThunk, AppDispatch } from 'redux/store';

// Local Dependencies
import {
  requestRandomUsersPending,
  requestRandomUsersSuccess,
  requestRandomUsersFailure,
} from './searchSlice';

export const fetchRandomUsers = (): AppThunk => async (
  dispatch: AppDispatch,
  getState
) => {
  // Set loading state
  dispatch(requestRandomUsersPending());
  // Grab params from state
  const state = getState();
  const { apiUrl } = state.appSettings;
  // const config = {
  //   headers: { Authorization: apiKey },
  // };
  try {
    const {
      data: { results },
    } = await axios.get(apiUrl);
    // Add data to store
    dispatch(requestRandomUsersSuccess(results));
  } catch (error) {
    // Send error
    dispatch(requestRandomUsersFailure(error));
  }
};
