const { BUY_ICECREAM } = require("../icecream/iceCreamTypes");

const previousState = {
  numOfIcecream: 10,
};

const iceCreamReducer = (state = previousState, action) => {
  switch (action.types) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
