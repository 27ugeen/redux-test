import { createStore, combineReducers } from 'redux';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  timerValue: timerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
