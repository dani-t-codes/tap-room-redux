import kegListReducer from '../../reducers/keg-list-reducer';

describe('keg list reducer', () => {

  let action;
  const kegData = {
    name: 'Tyrannical IPA',
    brand: 'Fort George',
    priceByKeg: 120,
    alcoholContent: 8.4,
    pintsLeft: 124,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, priceByKeg, alcoholContent, pintsLeft, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name,
      brand,
      priceByKeg,
      alcoholContent,
      pintsLeft,
      id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        priceByKeg,
        alcoholContent,
        pintsLeft,
        id
      }
    });
  });

});