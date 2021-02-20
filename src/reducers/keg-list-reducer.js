export default (state = {}, action) => {
  const { name, brand, priceByKeg, alcoholContent, pintsLeft, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name,
          brand,
          priceByKeg,
          alcoholContent,
          pintsLeft,
          id
        }
      });
    // case 'BUY_PINT':
    //   return Object.assign({}, state, {
    //     [id]: {
    //       pintsLeft: pintsLeft - 1,
    //       id
    //     }
    //   })
    // case 'RESTOCK_KEG':
    //   return Object.assign({}, state, {
    //     [id]: {
    //       pintsLeft: pintsLeft + 124,
    //       id
    //     }
    //   });
    case c.DELETE_KEG:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};