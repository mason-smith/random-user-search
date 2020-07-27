import { RootState } from 'redux/store';
import { User } from './types';

export const selectRandomUserList = (state: RootState): User[] =>
  state.searchState.randomUsers;
