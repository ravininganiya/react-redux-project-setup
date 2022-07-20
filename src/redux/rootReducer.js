import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducers from "./iceCream/iceCreamReducers";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducers
});

export default rootReducer;
