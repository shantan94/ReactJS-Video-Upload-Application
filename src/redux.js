import { Map } from "immutable";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer";

const store = createStore(
  reducer,
  Map(),
  compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
