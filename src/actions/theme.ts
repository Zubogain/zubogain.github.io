export const THEME_SET_HEADER = "THEME_SET_HEADER";
export const THEME_SET_SCROLLED = "THEME_SET_SCROLLED";
export const THEME_SET_HEADER_TRANSPARENT = "THEME_SET_HEADER_TRANSPARENT";
export const THEME_SET_CURRENT_RESOLUTION = "THEME_SET_CURRENT_RESOLUTION";

export const THEME_SET_HEADER_MENU = "THEME_SET_HEADER_MENU";

export const THEME_SET_SIDE_MENU_HIDE = "THEME_SET_SIDE_MENU_HIDE";
export const THEME_SET_SIDE_NOTIFICATIONS_HIDE =
  "THEME_SET_SIDE_NOTIFICATIONS_HIDE";

export const THEME_SET_IS_BLUR = "THEME_SET_IS_BLUR";

export const THEME_SET_IS_OPEN_MOBILE_MENU = "THEME_SET_IS_OPEN_MOBILE_MENU";
export const THEME_SET_ANIMATION_ROUTE_VARIANT =
  "THEME_SET_ANIMATION_ROUTE_VARIANT";

export const THEME_SET_ANIMATION_MOBILE_MENU_VARIANT =
  "THEME_SET_ANIMATION_MOBILE_MENU_VARIANT";

export const themeSetIsBlur = (bool: boolean) => {
  return {
    type: THEME_SET_IS_BLUR,
    payload: bool,
  };
};

export const themeSetCurrentResolution = (resolutionAlias: string) => {
  return { type: THEME_SET_CURRENT_RESOLUTION, payload: resolutionAlias };
};

export const setIsOpenMobileMenu = (bool: boolean) => {
  return { type: THEME_SET_IS_OPEN_MOBILE_MENU, payload: bool };
};

export const setSwipeDownAnimationVariant = () => {
  return {
    type: THEME_SET_ANIMATION_ROUTE_VARIANT,
    payload: {
      hidden: { opacity: 0, x: 0, y: -200 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: -200 },
    },
  };
};

export const setSwipeUpAnimationVariant = () => {
  return {
    type: THEME_SET_ANIMATION_ROUTE_VARIANT,
    payload: {
      hidden: { opacity: 0, x: 0, y: 200 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: 200 },
    },
  };
};

export const setDefaultAnimationVariant = () => {
  return {
    type: THEME_SET_ANIMATION_ROUTE_VARIANT,
    payload: {
      hidden: { opacity: 0, x: -200, y: 0 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: -100 },
    },
  };
};

export const setLeftAnimationMobileVariant = () => {
  return {
    type: THEME_SET_ANIMATION_MOBILE_MENU_VARIANT,
    payload: "left",
  };
};

export const setRightAnimationMobileVariant = () => {
  return {
    type: THEME_SET_ANIMATION_MOBILE_MENU_VARIANT,
    payload: "right",
  };
};
