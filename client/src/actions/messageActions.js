import {
  MESSAGES_LOAD_START,
  MESSAGES_LOAD_SUCCESS,
  MESSAGES_LOAD_FAIL
} from "./types";

import { db } from "../config/firebase";

export const loadChat = () => dispatch => {
  dispatch({ type: MESSAGES_LOAD_START });

  const response = [];

  db.collection("messages")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        response.push(doc.data());
      });
      dispatch({ type: MESSAGES_LOAD_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: MESSAGES_LOAD_FAIL, payload: err });
    });
};
