import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function CardComponent(props) {
  const cardStyle = {
    width: '35rem',
    margin: '1rem',
    padding: '1rem',
    display: 'inline-block',
    height: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    
      
    
  };

  const buttonStyle = {
    margin: '0.5rem',
    padding: '0.5rem',
    display: 'inline-block',
    height: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }

  return (

    <Card style = {cardStyle} class = "shadow">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Col>
        <Button variant="dark" href = {props.github_link} style={buttonStyle}>Github</Button>
      
        <Button variant="dark" href = {props.deployed_link} style={buttonStyle}>Deployed App</Button>
        </Col>
      </Card.Body>
    </Card>
        

    // <div className="container">
    //   <div className="card" style={cardStyle}>
    //     <div className="card-body">
    //     <h5 className="card-title">{props.name}</h5>
    //     <img src={props.image} alt=""></img>
    //       <p className="card-text">{props.description}</p>
    //       <p className="card-text">{props.github_link}</p>
          
    //     </div>
    //   </div>
    // </div>
  );
}