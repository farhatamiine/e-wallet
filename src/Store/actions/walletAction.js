export const addMoneyToWallet = (wallet) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //? make async call to firebase
    const firestore = getFirestore();
    firestore
      .collection("wallets")
      .add({
        ...wallet,
        balance: 15000,
      })
      .then(() => {
        dispatch({ type: "ADD_MONEY_TO_WALLET", wallet });
      })
      .catch((err) => {
        dispatch({ type: "ADD_MONEY_TO_WALLET_ERROR", err });
      });
  };
};
