import { themeSetCurrentResolution } from "../actions/theme";
export const setAliasScreenResolution = (
  currentResolution = null,
  dispatch
) => {
  if (typeof window !== "undefined") {
    const { innerWidth } = window;
    if (innerWidth < 576 && currentResolution != "xs") {
      dispatch(themeSetCurrentResolution("xs"));
    }

    if (innerWidth >= 576 && innerWidth < 768 && currentResolution != "sm") {
      dispatch(themeSetCurrentResolution("sm"));
    }

    if (innerWidth >= 768 && innerWidth < 992 && currentResolution != "md") {
      dispatch(themeSetCurrentResolution("md"));
    }

    if (innerWidth >= 992 && innerWidth < 1200 && currentResolution != "lg") {
      dispatch(themeSetCurrentResolution("lg"));
    }

    if (innerWidth >= 1200 && innerWidth < 1920 && currentResolution != "xl") {
      dispatch(themeSetCurrentResolution("xl"));
    }

    if (
      innerWidth >= 1200 &&
      innerWidth < 1560 &&
      currentResolution != "xl-full-hd"
    ) {
      dispatch(themeSetCurrentResolution("xl-full-hd"));
    }

    if (innerWidth >= 1920 && currentResolution != "full-hd") {
      dispatch(themeSetCurrentResolution("full-hd"));
    }
  }
};
