import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const NoteForm = ({ createNote }) => {
  const title = useRef(null);
  const dateTime = useRef(null);

  // const [formData,setFormData]= useState({
  //   title:"",
  //   dateTime:""
  // });

  // const handleFormData= (e)=> {
  //   const {name,value}= e.target;
  //   setFormData({...formData, [name]:value});
  // }

  return (
    <Card className="p-3 border-danger">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="enter a title of duty"
            ref={title}
            // value={formData.title}
            // onChange={(e) => handleFormData(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name="dateTime"
            type="datetime-local"
            placeholder="enter a title of duty"
            ref={dateTime}
            // value={formData.dateTime}
            // onChange={(e) => handleFormData(e)}
          />
        </Form.Group>

        <Button
          onClick={() => {
            createNote(title, dateTime);
            title.current.value = "";
            dateTime.current.value = "";
            title.current.focus();
          }}
        >
          Create Note
        </Button>
      </Form>
    </Card>
  );
};

export default NoteForm;
