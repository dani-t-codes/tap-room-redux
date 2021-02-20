import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('keg list reducer', () => {

  let action;
  const currentState ={
    1 : {
      name: 'Tyrannical IPA',
      brand: 'Fort George',
      priceByKeg: 120,
      alcoholContent: 8.4,
      pintsLeft: 124,
      id: 1 },
    2: {
      name: 'Soft Seasonal Saison',
      brand: 'Bend Brewing',
      priceByKeg: 105,
      alcoholContent: 4.4,
      pintsLeft: 100,
      id: 2,
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, priceByKeg, alcoholContent, pintsLeft, id } = currentState;
    action = {
      type: c.ADD_KEG,
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

  // test('Should successfully restock a keg and update selected keg', () => {
  //   const { pintsLeft, id } = currentState;
  //   action = {
  //     type: 'BUY_PINT',
  //     pintsLeft: pintsLeft - 1,
  //     id: 1
  //   };
  //   expect(kegListReducer({}, action)).toEqual({
  //     1 : {
  //       pintsLeft: 123,
  //       id: 1
  //     }
  //   });
  // });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'Soft Seasonal Saison',
        brand: 'Bend Brewing',
        priceByKeg: 105,
        alcoholContent: 4.4,
        pintsLeft: 100,
        id: 2,
      }
    });
  });

});