import AsyncStorage from "@react-native-community/async-storage";

import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  AUTH_CHECK_START,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAIL
} from "./types";

import { db } from "../config/firebase";
import keys from "../config/keys";

export const registerUser = (email, password) => dispatch => {
  dispatch({ type: REGISTER_USER_START });

  db.app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => dispatch({ type: REGISTER_USER_SUCCESS, payload: user }))
    .catch(err => dispatch({ type: REGISTER_USER_FAIL, payload: err }));
};

const storeData = async token => {
  try {
    await AsyncStorage.setItem(keys.userIdKey, token);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(keys.userIdKey);

    if (value !== null) {
      // value previously stored
      alert(`cookie is stored ${value} now `);
    }
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = (email, password) => dispatch => {
  dispatch({ type: LOGIN_USER_START });

  db.app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const token = user.user.uid;
      storeData(token);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user.user.uid });
      getData();
    })
    .catch(err => dispatch({ type: LOGIN_USER_FAIL, payload: err }));

  
};

export const authCheck = () => dispatch => {
  dispatch({ type: AUTH_CHECK_START });
  const user = db.app.auth().currentUser;

  if (user) {
    dispatch({ type: AUTH_CHECK_SUCCESS, payload: user });
  } else {
    dispatch({ type: AUTH_CHECK_FAIL });
  }
};
