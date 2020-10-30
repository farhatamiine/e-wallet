import { combineReducers } from "redux";
import authReducer from "./authReducer";
import walletReducer from "./walletReducer";

const reducers = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});

export default reducers;
