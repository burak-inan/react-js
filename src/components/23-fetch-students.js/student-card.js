import React from 'react'
import { Card } from 'react-bootstrap'

/*
  when we assign the same object or array, state will be updated 
  all the time. so the JS and JSX codes will be re-rendered
*/
const StudentCard = (props) => {

  const {id,avatar,firstName,lastName,email}= props;

  return (
    <Card >
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{firstName}+" "+{lastName}</Card.Title>
        <Card.Text> {email} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StudentCard