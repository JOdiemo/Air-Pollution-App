import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchCountries } from '../redux/Reducers/CountrySlice';
import Africa from '../images/Africa.png';
import Americas from '../images/Americas.png';
import Asia from '../images/Asia.png';
import Oceania from '../images/Oceania.png';
import Europe from '../images/Europe.png';
import Antarctic from '../images/Antarctic.png';

const DisplayRegion = (props) => {
  const { region, regionCountry } = props;
  const dispatch = useDispatch();
  let region1;
  if (region === 'Africa') region1 = Africa;
  else if (region === 'Asia') region1 = Asia;
  else if (region === 'Europe') region1 = Europe;
  else if (region === 'Oceania') region1 = Oceania;
  else if (region === 'Americas') region1 = Americas;
  else region1 = Antarctic;
  return (
    <div className="col-6 col-lg-4 col-md-4 border border-dark rouded-9">
      <div className="region d-flex justify-content-between">
        <div className="d-flex flex-column">
          <img src={region1} alt="" className="m-2 img" />
          <div className="region-details">
            <p className="name">
              {region}
            </p>
            <p>
              {regionCountry}
              {' '}
              Countries
            </p>
          </div>
        </div>
        <div>
          <button
            key={region}
            type="button"
            className="btn mt-2"
            onClick={() => {
              dispatch(fetchCountries(region));
            }}
            to="/countries"
          >
            <Link to="/countries" className="link m-2 text-light">
              <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
DisplayRegion.propTypes = {
  region: PropTypes.string.isRequired,
  regionCountry: PropTypes.number.isRequired,
};

export default DisplayRegion;
