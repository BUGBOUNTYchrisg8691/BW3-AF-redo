import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import classesReducer from "./reducers/classesReducer";
import instructorClassesReducer from "./reducers/instructorClassesReducer";

export const middlewares = [thunk, logger];

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
  createStore
);

export const reducers = combineReducers({
  classes: classesReducer,
  instructorClasses: instructorClassesReducer,
});

export const store = createStoreWithMiddlewares(reducers);
