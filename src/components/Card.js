import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <img src={props.image} alt=""></img>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.github_link}</p>
          
        </div>
      </div>
    </div>
  );
}