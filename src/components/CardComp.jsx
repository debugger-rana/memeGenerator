import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"

function CardComp(props) {
  const navigate=useNavigate();
  return (
    <div>
        <Card style={{ width: '18rem', margin:'20px'}}>
      <Card.Img  variant="top" src={props.img}  style={{width:"250px", height:"250px", margin:'20px'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button 
        onClick={(e)=>navigate(`/edit?url=${props.img}`)}
        variant="primary">Edit</Button>     {/* passing as querry parameter */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardComp