export default (state = {}, action) => {
  const { name, brand, priceByKeg, alcoholContent, pintsLeft, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
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
    default:
      return state;
    }
};