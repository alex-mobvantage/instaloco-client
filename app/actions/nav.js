export const NAV_TITLE_CHANGE = 'NAV_TITLE_CHANGE';
export const changeNavTitle = (title) => {
  return {
    type: NAV_TITLE_CHANGE,
    title
  };
};

export const MAIN_TAB_CHANGE = 'MAIN_TAB_CHANGE';
export const changeMainTab = (key) => {
  return {
    type: MAIN_TAB_CHANGE,
    key
  };
};