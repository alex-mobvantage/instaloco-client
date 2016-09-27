import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const MAIN_TAB_CHANGE = 'MAIN_TAB_CHANGE';
export const changeMainTab = (key, title) => {
  return {
    type: MAIN_TAB_CHANGE,
    key,
    title
  };
};

export const navigateToPurchaseLikes = (media_id, image_url, likes) => {
  return () => {
    AsyncStorage.getItem('navigations_to_purchase_likes')
      .then(navigations => {
        navigations = Number(navigations || 0);
        if (navigations === 0){
          Actions.purchaseCoins({media_id, image_url, likes});
        } else {
          Actions.purchaseLikes({media_id, image_url, likes});
        }

        navigations++;
        if (navigations === 5){
          navigations = 0;
        }

        return navigations;
      })
      .then(navigations => AsyncStorage.setItem('navigations_to_purchase_likes', String(navigations)));
  };
};