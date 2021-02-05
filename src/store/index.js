import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import songsReducer from "../reducers/songs";
import userReducer from "../reducers/user";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  album: {
    error: false,
  },
  user: {
    username: null,
  },
};

const bigReducer = combineReducers({ album: songsReducer, user: userReducer });
// every sub-reducer is triggered at ANY action dispatching

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
