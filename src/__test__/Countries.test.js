import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from '../redux/Reducers/CountrySlice';
import pollutionReducer from '../redux/Reducers/PollutionSlice';
import CountriesHome from '../components/CountriesHome';

const rootReducer = combineReducers({
  countryReducer,
  pollutionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
describe('Countries List ', () => {
  test('Countries List renders correctly', () => {
    const countries = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CountriesHome />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(countries).toMatchSnapshot();
  });
});
