import { FETCHED_SURVEY } from '../actions/surveys';
import { LOGGED_OUT } from '../actions/auth';

export const survey = (state = '', action) => {
  switch (action.type){
    case FETCHED_SURVEY:
      return action.survey_url;
    case LOGGED_OUT:
      return '';
    default:
      return state;
  }
};