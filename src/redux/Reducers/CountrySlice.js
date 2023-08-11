const ADD_COUNTRY = 'Country/ADD_COUNTRY';

export const fetchCountryData = async (reg) => {
  const res = await fetch('https://restcountries.com/v3.1/all')
    .then((data) => data.json());
  const result = res.sort().filter((country) => country.region === reg);
  return result;
};

export const fetchCountries = (reg) => async (dispatch) => {
  const countries = await fetchCountryData(reg);

  dispatch({
    type: ADD_COUNTRY,
    payload: countries.map((country) => ({
      name: country.name,
      region: reg,
      latlng: country.latlng,
      population: country.population,
      code: country.cca2,
      flag: country.flags.png,
    })),
  });
};

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
