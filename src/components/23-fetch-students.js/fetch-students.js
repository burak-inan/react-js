import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import StudentCard from "./student-card";

const FetchStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://650b0d62dfd73d1fab097d88.mockapi.io/api/v1/students")
        .then((resp) => resp.json())
        .then((data) => {
          setStudents(data);
        })

        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000);
  }, []);

  return (
    <Container>
      {loading && <Spinner animation="border" variant="secondary" />}

      <Row>
        {students.map((student) => (
          <Col key={student.id}>
            <StudentCard {...student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FetchStudents;
