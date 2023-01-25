import {
  LOCALIZATION_SET_LANG,
  LOCALIZATION_SET_URL_PIE
} from "../actions/localization";

const initialState = {
  lang: "ru",
  urlPie: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOCALIZATION_SET_LANG:
      return { ...state, ...action.payload };
    case LOCALIZATION_SET_URL_PIE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
