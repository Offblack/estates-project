import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'src/reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, applyMiddleware(thunk));
/* eslint-enable */

export default store;
