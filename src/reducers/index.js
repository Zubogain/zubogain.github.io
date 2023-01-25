import { combineReducers } from "redux";
import localization from "./localization";
import theme from "./theme";

export default combineReducers({
  localization,
  theme,
});
