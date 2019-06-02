import {
  MESSAGES_LOAD_START,
  MESSAGES_LOAD_SUCCESS,
  MESSAGES_LOAD_FAIL
} from "./types";

import AsyncStorage from "@react-native-community/async-storage";
import { db } from "../config/firebase";
import keys from "../config/keys";

export const loadChat = () => (dispatch, getState) => {
  const { id } = getState().auth;

  dispatch({ type: MESSAGES_LOAD_START });

  const response = [];

  db.collection("messages")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        response.push({
          toUser: doc.data().toUser,
          fromUser: doc.data().fromUser,
          message: doc.data().message,
          id: doc.id,
          userId: id
        });
      });
      dispatch({ type: MESSAGES_LOAD_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: MESSAGES_LOAD_FAIL, payload: err });
    });
};
