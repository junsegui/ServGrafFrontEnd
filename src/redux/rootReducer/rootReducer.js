import { combineReducers } from "redux";
import { userReducer } from "../userReducer/userReducer";
import { modalReducer } from "../modalsReducer/modalsReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  modals: modalReducer,
});
