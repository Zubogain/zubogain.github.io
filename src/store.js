import { createStore, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import combinedReducer from "./reducers";
// import { createStateSyncMiddleware } from "redux-state-sync";
// import JWTMiddleware from "./middlewares/jwt-middleware";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  const isServer = typeof window !== "undefined";
  const middlewares = [thunkMiddleware];
  // isServer &&
  //   middlewares.push(
  //     createStateSyncMiddleware({
  //       broadcastChannelOption: {
  //         type:
  //           typeof BroadcastChannel !== "undefined" ? "native" : "localstorage",
  //       },
  //     })
  //   );
  return createStore(reducer, bindMiddleware(middlewares));
};

export const wrapper = createWrapper(initStore);
