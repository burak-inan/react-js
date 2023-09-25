import React from "react";
import { Card, Form } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

const Note = ({id, title, dateTime, removeNote}) => {
  
  return (
    <Card id={id} className="h-100 border-secondary">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{dateTime}</Card.Text>
        <div className="d-flex align-items-center">
          <Form.Check type="checkbox" className="d-inline-block me-2 cursor-pointer" role="button" />
          <RiDeleteBin6Line role="button" onClick={()=> removeNote(id)}/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Note;
