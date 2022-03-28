import axios from 'axios';

const SET_OVERLAY_IS_ACTIVE = 'SET_OVERLAY_IS_ACTIVE';
const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
const SET_ACTIVE_TAB_ID = 'SET_ACTIVE_TAB_ID';
const SET_CARDS = 'SET_CARDS';

export const setOverlayIsActive = payload => ({
  type: SET_OVERLAY_IS_ACTIVE,
  payload,
});
export const setSearchString = payload => ({
  type: SET_SEARCH_STRING,
  payload,
});
export const setActiveTabId = payload => ({ type: SET_ACTIVE_TAB_ID, payload });
export const setCards = payload => ({ type: SET_CARDS, payload });

export const getCards = string => {
  return dispatch => {
    console.log('Req sent get Cards');
    axios
      .get(`http://localhost:8000/api/${string}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(response => dispatch(setCards(response.data.cards)))
      .catch(error =>
        console.log('Me error handling: ' + response.data.isAuth)
      );
  };
};
