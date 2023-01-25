export const LOCALIZATION_SET_LANG = "LOCALIZATION_SET_LANG";
export const LOCALIZATION_SET_URL_PIE = "LOCALIZATION_SET_URL_PIE";

export const localizationSetLang = (lang) => ({
  type: LOCALIZATION_SET_LANG,
  payload: lang,
});

export const localizationSetUrlPie = (urlPie) => (dispatch) => {
  if (urlPie) {
    return dispatch({
      type: LOCALIZATION_SET_URL_PIE,
      payload: {
        urlPie,
      },
    });
  }
};
