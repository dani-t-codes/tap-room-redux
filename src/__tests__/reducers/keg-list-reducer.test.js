import kegListReducer from '../../reducers/keg-list-reducer';

describe('keg list reducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});