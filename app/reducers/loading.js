import { BEGIN_LOGIN, LOGGED_IN } from '../actions/auth';

import { 
  BEGIN_PURCHASE_FOLLOWERS, PURCHASED_FOLLOWERS,
  BEGIN_FOLLOW, FOLLOWED
} from '../actions/followers';

import {
  BEGIN_LOADING_IMAGES, LOADED_IMAGES,
  BEGIN_LOAD_NEXT_IMAGE, LOADED_NEXT_IMAGE,
  BEGIN_LIKE_IMAGE, LIKED_IMAGE,
  BEGIN_SKIP_IMAGE, SKIPPED_IMAGE
} from '../actions/images';

import { BEGIN_PURCHASE_LIKES, PURCHASED_LIKES } from '../actions/likes';

import {
  BEGIN_FETCH_OFFERS, FETCHED_OFFERS,
  BEGIN_OFFER_START, BEGAN_OFFER
} from '../actions/offers';

import { BEGIN_TRANSACTION_COMPLETE, PURCHASED_COINS } from '../actions/purchase';

import { UNEXPECTED_ERROR } from '../actions/error';

export const loading = (state, action) => {
  if (!state){
    state = {
      login: false,
      getFollowers: false,
      getCoins: false,
      getLikes: false,
      purchaseLikes: false,
      offerwall: false,
      offerDetails: false,
      purchaseCoins: false
    }
  }

  switch (action.type){
    case BEGIN_LOGIN:
      return Object.assign({}, state, {
        login: true
      });
    case LOGGED_IN:
      return Object.assign({}, state, {
        login: false
      });
    case BEGIN_PURCHASE_FOLLOWERS:
      return Object.assign({}, state, {
        getFollowers: true
      });
    case PURCHASED_FOLLOWERS:
      return Object.assign({}, state, {
        getFollowers: false
      });
    case BEGIN_FOLLOW:
    case BEGIN_LOAD_NEXT_IMAGE:
    case BEGIN_LIKE_IMAGE:
    case BEGIN_SKIP_IMAGE:
      return Object.assign({}, state, {
        getCoins: true
      });
    case FOLLOWED:
    case LOADED_NEXT_IMAGE:
    case LIKED_IMAGE:
    case SKIPPED_IMAGE:
      return Object.assign({}, state, {
        getCoins: false
      });
    case BEGIN_LOADING_IMAGES:
      return Object.assign({}, state, {
        getLikes: true
      });
    case LOADED_IMAGES:
      return Object.assign({}, state, {
        getLikes: false
      });
    case BEGIN_PURCHASE_LIKES:
      return Object.assign({}, state, {
        purchaseLikes: true
      });
    case PURCHASED_LIKES:
      return Object.assign({}, state, {
        purchaseLikes: false
      });
    case BEGIN_FETCH_OFFERS:
      return Object.assign({}, state, {
        offerwall: true
      });
    case FETCHED_OFFERS:
      return Object.assign({}, state, {
        offerwall: false
      });
    case BEGIN_OFFER_START:
      return Object.assign({}, state, {
        offerDetails: true
      });
    case BEGAN_OFFER:
      return Object.assign({}, state, {
        offerDetails: false
      });
    case BEGIN_TRANSACTION_COMPLETE:
      return Object.assign({}, state, {
        purchaseCoins: true
      });
    case PURCHASED_COINS:
      return Object.assign({}, state, {
        purchaseCoins: false
      });
    case UNEXPECTED_ERROR:
      return Object.assign({}, state, {
        login: false,
        getFollowers: false,
        getCoins: false,
        getLikes: false,
        purchaseLikes: false,
        offerwall: false,
        offerDetails: false,
        purchaseCoins: false
      });
    default:
      return state;
  }
};