import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (preloadedState = {}) => {
  const middlewares = [thunk, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}

// const configureStore = (preloadedState = {}) => (
//   createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunk, logger)
//   )
// );

export default configureStore;