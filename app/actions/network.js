import { NetInfo } from 'react-native';

export const getNetworkState = () => {
  return (dispatch) => {
    NetInfo.fetch().done((state) => {
      dispatch(networkStateUpdated(state));
    });
  }
}

export const NETWORK_STATE_UPDATED = 'NETWORK_STATE_UPDATED';
export const networkStateUpdated = (state) => {
  return {
    type: NETWORK_STATE_UPDATED,
    state
  };
};