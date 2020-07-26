import React from 'react';

function Card(props) {
  const { title, logo, description, rate, address, countReview } = props;

  return(
    <div>
      <img src={logo} alt={title}/>
      <span>{title}</span>
      <span>{description}</span>
      <span>{address}</span>
      <div>
        <span>{rate}</span>
        <span>نظر  {countReview}</span>
      </div>
    </div>
  )
}

export default Card;
