import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const { id } = props;
  return (
    <div>
      <nav className="bg-pink">
        <div className="d-flex justify-content-between align-items-center bg- p-3 mb-2 bg-pink">
          <button
            type="button"
            className="btn mt-2"
          >
            <NavLink to={id} className="link m-2 text-light">
              <FontAwesomeIcon icon={faCircleArrowLeft} className="icon" />
            </NavLink>
          </button>
          <h1 className="header">Global Air Pollution Updates</h1>
          <div className="d-flex gap-3">
            <NavLink to="">
              <FontAwesomeIcon icon={faMicrophone} className="link text-light" />
            </NavLink>
            <NavLink to="" className="link text-light">
              <FontAwesomeIcon icon={faCog} className="icon" text="reload" />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
Header.propTypes = {
  id: PropTypes.string,
};

export default Header;
