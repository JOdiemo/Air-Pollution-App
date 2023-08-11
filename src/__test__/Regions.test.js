import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from '../redux/Reducers/CountrySlice';
import pollutionReducer from '../redux/Reducers/PollutionSlice';
import RegionsHome from '../components/RegionsHome';

const rootReducer = combineReducers({
  countryReducer,
  pollutionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Region List', () => {
  test('Region Lists renders correctly', () => {
    const regions = renderer
      .create(
        <Provider store={store}>
          <Router>
            <RegionsHome />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(regions).toMatchSnapshot();
  });
});
