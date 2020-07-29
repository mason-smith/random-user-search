import reducer from '../appSettingsSlice';

const apiUrl = 'https://randomuser.me/api/?results=100';

describe('AppSettings Slice', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual({ apiUrl });
  });
});
