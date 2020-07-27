import { createSlice } from '@reduxjs/toolkit';

interface AppSettingsState {
  apiUrl: string;
}

const initialState: AppSettingsState = {
  apiUrl: 'https://randomuser.me/api/?results=100',
};

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {},
});

export default appSettingsSlice.reducer;
