import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  GET_ITEMS_SUCCESS,
  EDIT_ITEM_SUCCESS,
} from 'src/actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  const { data } = state;
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        data: action.payload.data.data,
      };
    case EDIT_ITEM_SUCCESS:
      return {
        ...state,
        data: data.map(item =>
          item.id === action.payload.id ? { ...action.payload } : { ...item },
        ),
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        data: [...data, action.payload],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        data: data.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
