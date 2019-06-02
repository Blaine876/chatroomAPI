import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Routes from "./Routes";

import rootReducers from "./reducers/rootReducer";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   blacklist: ['authenticate']
// };

//const persistedReducer = persistReducer(persistConfig, rootReducers);

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  rootReducers,
  //persistedReducer,
  compose(
    applyMiddleware(thunk),
    composeEnhancers
  )
);

//const persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Routes />
        {/* </PersistGate> */}
      </Provider>
    );
  }
}

export default App;
