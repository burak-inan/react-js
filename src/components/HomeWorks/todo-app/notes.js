import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Note from "./note";

const Notes = ({formData, updateNotes}) => {


  const removeNote = (id) => {
    const arr= formData.filter((note)=> note.id !=id)
    updateNotes(arr);
  };

  return (
    <Card className="p-2 border-success">
      <Row className="g-3">
        {formData.map( (note) => (
          <Col md={4} key={note.id} className="">
            <Note {...note} removeNote={removeNote}/>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Notes;
