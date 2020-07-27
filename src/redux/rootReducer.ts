import searchReducer from 'features/Search/searchSlice';
import appSettingsReducer from './appSettingsSlice';

const rootReducer = {
  appSettings: appSettingsReducer,
  searchState: searchReducer,
};

export default rootReducer;
