import React from 'react';

function setStatus(rate) {
  if(rate >= 4) {
    return 'perfect';
  } else if( rate >= 2) {
    return 'good';
  }
  return 'bad';
}
function Card(props) {
  const { title, logo, description, rate, address, countReview } = props;
  const status = setStatus(rate);

  return(
    <div className="card">
      <div className="mainInfo">
        <img src={logo} alt={title}/>
        <div className="titleBox">
          <span className="title">{title}</span>
          <span className="desc">{description}</span>
          <span className="address">{address}</span>
        </div>
      </div>
      <div className="asideInfo">
        <span className={`rate ${status}`}>{rate}</span>
        <span className="review">{countReview} نظر</span>
      </div>
    </div>
  );
}

export default Card;
