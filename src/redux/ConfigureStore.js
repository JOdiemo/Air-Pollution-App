import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './Reducers/CountrySlice';
import pollutionReducer from './Reducers/PollutionSlice';

const rootReducer = combineReducers({
  countryReducer,
  pollutionReducer,
});

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));
export default store;
