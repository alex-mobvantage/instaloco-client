export const NAV_TITLE_CHANGE = 'NAV_TITLE_CHANGE';
export const changeNavTitle = (title) => {
  return {
    type: NAV_TITLE_CHANGE,
    title
  };
};