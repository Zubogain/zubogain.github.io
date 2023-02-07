import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";

export const LOCALIZATION_SET_LANG = "LOCALIZATION_SET_LANG";
export const LOCALIZATION_SET_URL_PIE = "LOCALIZATION_SET_URL_PIE";

export const localizationSetLang = (lang: string) => ({
  type: LOCALIZATION_SET_LANG,
  payload: lang,
});

export const localizationSetUrlPie =
  (urlPie: string) => (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    if (urlPie) {
      return dispatch({
        type: LOCALIZATION_SET_URL_PIE,
        payload: {
          urlPie,
        },
      });
    }
  };
