import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import reducers from "./Store/Reducer/rootReducer";
import firebase from "./utils/firebase";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),

    reduxFirestore(firebase)
  )
);
const rrfProps = {
  firebase,
  config: firebase,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDom.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector("#root")
);
