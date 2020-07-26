import React from 'react';
import { useSelector } from 'react-redux';
import Card from './card';
import './cards.scss';

function Filters() {
  const vendorList = useSelector(state => state.vendorList);

  if (vendorList.length) {
    return (
      <React.Fragment>
        {vendorList.map(resturan => (
          <Card
            key={resturan.id}
            title={resturan.title}
            logo={resturan.logo}
            description={resturan.description}
            rate={resturan.rate}
            address={resturan.address}
            countReview={resturan.countReview}
          />
        ))}
      </React.Fragment>
    );
  }
  return <p>loading...</p>
}

export default Filters;
