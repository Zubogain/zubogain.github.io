import {
  THEME_SET_HEADER,
  THEME_SET_SCROLLED,
  THEME_SET_HEADER_TRANSPARENT,
  THEME_SET_CURRENT_RESOLUTION,
  THEME_SET_HEADER_MENU,
  THEME_SET_SIDE_MENU_HIDE,
  THEME_SET_SIDE_NOTIFICATIONS_HIDE,
  THEME_SET_IS_BLUR,
  THEME_SET_IS_OPEN_MOBILE_MENU,
  THEME_SET_ANIMATION_ROUTE_VARIANT,
  THEME_SET_ANIMATION_MOBILE_MENU_VARIANT,
} from "../actions/theme";

const initialState = {
  header: {
    isWhite: false,
  },
  isScrolled: false,
  headerTransparent: false,
  currentResolution: null,
  headerMenuActive: false,
  sideMenuHide: true,
  sideNotificationsHide: true,
  isBlur: false,
  isOpenMobileMenu: false,
  animationMobileMenuVariant: "default",
  animationRouteVariant: {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case THEME_SET_ANIMATION_MOBILE_MENU_VARIANT:
      return {
        ...state,
        animationMobileMenuVariant: action.payload,
      };
    case THEME_SET_ANIMATION_ROUTE_VARIANT:
      return {
        ...state,
        animationRouteVariant: action.payload,
      };
    case THEME_SET_IS_OPEN_MOBILE_MENU:
      return {
        ...state,
        isOpenMobileMenu: action.payload,
      };

    case THEME_SET_HEADER_MENU:
      return {
        ...state,
        headerMenuActive: action.payload,
      };
    case THEME_SET_HEADER:
      return {
        ...state,
        ...{
          header: {
            isWhite: action.payload,
          },
        },
      };
    case THEME_SET_SCROLLED:
      return {
        ...state,
        isScrolled: action.payload,
      };
    case THEME_SET_HEADER_TRANSPARENT:
      return {
        ...state,
        headerTransparent: action.payload,
      };
    case THEME_SET_CURRENT_RESOLUTION:
      return {
        ...state,
        currentResolution: action.payload,
      };
    case THEME_SET_SIDE_MENU_HIDE:
      return { ...state, sideMenuHide: action.payload };
    case THEME_SET_SIDE_NOTIFICATIONS_HIDE:
      return { ...state, sideNotificationsHide: action.payload };
    case THEME_SET_IS_BLUR:
      return { ...state, isBlur: action.payload };
    default:
      return state;
  }
}
