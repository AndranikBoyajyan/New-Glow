import {
  MEDIA_DESKTOP_LARGE,
  MEDIA_TABLET,
  MEDIA_TABLET_SMALL,
} from "../../../constants/windowSizes";

export const getTitleWidth = (width: number) => {
  if (width <= MEDIA_DESKTOP_LARGE && width > MEDIA_TABLET)
    return "title_h1_170";
  if (width <= MEDIA_TABLET && width > MEDIA_TABLET_SMALL)
    return "title_h1_152";
  return "title_h1_124";
};

export const getSubTitleWidth = (width: number) => {
  if (width <= MEDIA_DESKTOP_LARGE && width > MEDIA_TABLET) return "title_48";
  if (width <= MEDIA_TABLET && width > MEDIA_TABLET_SMALL) return "title_36";
  return "title_28";
};
