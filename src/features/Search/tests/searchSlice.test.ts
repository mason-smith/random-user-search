import reducer from '../searchSlice';

const initialState = {
  isLoading: false,
  error: null,
  randomUsers: [],
};

describe('SearchSlice Slice', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
