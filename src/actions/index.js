import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const EDIT_ITEM_REQUEST = 'EDIT_ITEM_REQUEST';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE';

export const removeItem = id => dispatch => {
  dispatch({ type: REMOVE_ITEM_REQUEST });

  axios
    .delete(`https://alfa.propertygrouppoland.pl/q/michalopalka/delete/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REMOVE_ITEM_FAILURE });
    });
};

export const addItem = itemContent => dispatch => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post('https://alfa.propertygrouppoland.pl/q/michalopalka/create', {
      ...itemContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          id: { ...data.data },
          ...itemContent,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const editItem = (itemContent, id) => dispatch => {
  dispatch({ type: EDIT_ITEM_REQUEST });

  return axios
    .post('https://alfa.propertygrouppoland.pl/q/michalopalka/update', {
      ...itemContent,
      id,
    })
    .then(({ data }) => {
      dispatch({
        type: EDIT_ITEM_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_ITEM_FAILURE });
    });
};

export const getItems = () => dispatch => {
  dispatch({ type: GET_ITEMS_REQUEST });

  return axios
    .get('https://alfa.propertygrouppoland.pl/q/michalopalka/getAll')
    .then(({ data }) => {
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ITEMS_FAILURE });
    });
};
