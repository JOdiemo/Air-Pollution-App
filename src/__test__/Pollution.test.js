import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pollutionReducer from '../redux/Reducers/PollutionSlice';
import Pollutions from '../components/Pollutions';

const rootReducer = combineReducers({
  pollutionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
describe('Pollutions List ', () => {
  test('Pollution lists render correctly', () => {
    const pollutions = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Pollutions />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(pollutions).toMatchSnapshot();
  });
});
