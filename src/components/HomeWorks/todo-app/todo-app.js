import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import NoteForm from './note-form'
import Notes from './notes'

const TodoApp = () => {

  const [formData, setFormData] = useState([]);
  const [lastId, setlastId] = useState(0);
  // console.log(formData[formData.length-1].lastId);

  // const createNote= (data)=> {
  //   setFormData(data);
  // }
  // console.log(formData); 

  const createNote= (title,dateTime) => {
    setFormData([...formData, { title:title.current.value, dateTime:dateTime.current.value, id:lastId.toString() }])
    setlastId(prev=> prev+1);
  }

  
  const updateNotes= (updatedNotes)=> {
    setFormData(updatedNotes);
  }

  useEffect( ()=> {
    fetch("https://65187dc6818c4e98ac5fd391.mockapi.io/todo")
    .then(note=> note.json())
    .then(note=> {setFormData(note); setlastId(parseInt(note.slice(-1)[0]?.id)+1);})
    .catch((err) => {
      console.log(err);
    });    
  },[]);

  console.log(...formData);
  console.log(lastId);

  return (
    <Card className='m-5 p-2 border-info'>
      <Row className='g-4'>
        <Col sm={3}><NoteForm createNote= {createNote}/></Col>
        <Col sm={9}><Notes formData={formData} updateNotes={updateNotes}/></Col>
      </Row>
    </Card>
  )
}

export default TodoApp