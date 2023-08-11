import React from 'react';
import Header from './Header';
import Region from './DisplayRegion';
import World from '../images/world.png';

const RegionsHome = () => {
  const regionList = [
    { region: 'Africa', country: 59 },
    { region: 'Americas', country: 56 },
    { region: 'Antarctic', country: 5 },
    { region: 'Asia', country: 50 },
    { region: 'Europe', country: 53 },
    { region: 'Oceania', country: 27 },
  ];
  return (
    <div>
      <Header id="/" />
      <div className="world-container">
        <img src={World} alt="" className="world" />
        <div className="contents">
          <h4>Air Pollution mobile and webapp Tracker.</h4>
          <p>Air Pollution Monitor.</p>
        </div>
      </div>
      <div className="row m-4 border border-dark rounded-8">
        {
            regionList.map((element) => (
              <Region
                key={element.region}
                region={element.region}
                regionCountry={element.country}
              />
            ))
        }
      </div>
    </div>
  );
};

export default RegionsHome;
