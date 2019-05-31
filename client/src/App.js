import React, { Component } from "react";
import { Text, View } from "react-native";
import { Home } from "./components/screens";

import rootReducers from "./reducers/rootReducer";

import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    composeEnhancers
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
