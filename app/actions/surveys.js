import { request } from './api';
import { unexpectedError } from './error';

export const fetchSurvey = () => {
  return (dispatch) => {
    dispatch(request({
      path: '/survey',
      success: data => dispatch(fetchedSurvey(data))
    }));
  };
};

export const FETCHED_SURVEY = 'FETCHED_SURVEY';
export const fetchedSurvey = (data) => {
  return {
    type: FETCHED_SURVEY,
    data
  };
};