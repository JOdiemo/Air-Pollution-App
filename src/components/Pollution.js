import React from 'react';
import PropTypes from 'prop-types';

const Pollution = (props) => {
  const {
    co, no, no2, flag, name, lat, lng,
  } = props;
  return (
    <div className="pollution m-5">
      <h3 className="text-white m-2">{name}</h3>
      <div className="m-2">
        <img src={flag} alt="flag" className="w-25" />
      </div>
      <p className="m-2 text-warning">
        Air pollution in ( μg/m3 ) statistics - 2022:
      </p>
      <table className="table">
        <thead>
          <tr className="table-light">
            <th scope="col">gas</th>
            <th scope="col">micrograms (one-millionth of a gram) per cubic meter air </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-secondary">
            <th scope="row">Carobon Monoxide(CO)</th>
            <td>{co}</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">Nitrogen Oxide(NO)</th>
            <td>{no}</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">Nitrogen Dioxode(NO2)</th>
            <td>{no2}</td>
          </tr>
          <tr className="table-info">
            <th scope="row">Latitude</th>
            <td>{lat}</td>
          </tr>
          <tr className="table-info">
            <th scope="row">Longitude</th>
            <td>{lng}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};
Pollution.propTypes = {
  co: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
  no2: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
};
export default Pollution;
