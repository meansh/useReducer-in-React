const { BUY_CAKE } = require("./cakeTypes");

//ANCHOR: Reducer = Accepts (previousState, action) = > newState

const previousState = {
  numOfCakes: 10,
};

const cakeReducer = (state = previousState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
