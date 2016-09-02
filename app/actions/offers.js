export const fetchOffers = () => {
  return (dispatch, getState) => {
    let { access_token } = getState().login;
    if (!access_token){
      return;
    }

    fetch('http://cashforapps.herokuapp.com/ping')
      .then(response => response.json())
      .then(data => dispatch(fetchedOffers(data)))
      .catch(err => console.log(err));
  }
};

export const FETCHED_OFFERS = 'FETCHED_OFFERS';
export const fetchedOffers = (data) => {
  return {
    type: FETCHED_OFFERS,
    offers: data
  };
};