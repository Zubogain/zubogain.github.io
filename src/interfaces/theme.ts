export interface IThemeState {
  header: IThemeHeader;
  isScrolled: boolean;
  headerTransparent: boolean;
  currentResolution: string | null;
  headerMenuActive: boolean;
  sideMenuHide: boolean;
  sideNotificationsHide: boolean;
  isBlur: boolean;
  isOpenMobileMenu: boolean;
  animationMobileMenuVariant: string;
  animationRouteVariant: IThemeAnimationRouteVariant;
}

export interface IThemeHeader {
  isWhite: boolean;
}

export interface IThemeAnimationRouteVariant {
  hidden: IThemeAnimationRouteVariantDefault;
  enter: IThemeAnimationRouteVariantDefault;
  exit: IThemeAnimationRouteVariantDefault;
}

export interface IThemeAnimationRouteVariantDefault {
  opacity: number;
  x: number;
  y: number;
}
