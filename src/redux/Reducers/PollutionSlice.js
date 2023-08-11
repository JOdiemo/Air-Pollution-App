const ADD_POLLUTION = 'Pollution/ADD_POLLUTION';

export const fetchPollution = async (lat, lon) => {
  const url = 'https://api.openweathermap.org/data/2.5/air_pollution?';
  const id = '58c5660790158f73db391a9807f44585';

  const res = await fetch(`${url}lat=${lat}&lon=${lon}&appid=${id}`);
  return res.json();
};

export const getPollutionData = (lat1, lng1, flag, name) => async (dispatch) => {
  const pollutions = await fetchPollution(lat1, lng1);
  dispatch({
    type: ADD_POLLUTION,
    payload: {
      lat: pollutions.coord.lat,
      lng: pollutions.coord.lon,
      co: pollutions.list[0].components.co,
      no: pollutions.list[0].components.no,
      no2: pollutions.list[0].components.no2,
      id: pollutions.list[0].main.aqi,
      flag,
      name,
    },
  });
};

const pollutionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POLLUTION:
      return action.payload;
    default:
      return state;
  }
};

export default pollutionReducer;
