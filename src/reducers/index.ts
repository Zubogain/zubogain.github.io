import { combineReducers } from "redux";
import localization from "./localization";
import contact from "./contact";
import theme from "./theme";

export default combineReducers({
  localization,
  theme,
  contact,
});
