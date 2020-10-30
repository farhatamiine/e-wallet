const initState = {
  financialOverview: {
    balance: 8000,
    expance: 3000,
    income: 5000,
    currency: "DHs",
  },
};

const walletReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MONEY_TO_WALLET":
      console.log("Money added to firebase");
      return state;

    case "ADD_MONEY_TO_WALLET_ERROR":
      console.log("Money error");
      return state;
    default:
      return state;
  }
};

export default walletReducer;
