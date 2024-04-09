// Faculty.jsx
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import bluetoothImage from './blutooth.jpg'; // Import the image
import teachersData from './teachers.json'; // Import the JSON file
import "bootstrap/dist/css/bootstrap.min.css";
import './Faculty.css'; // Import CSS file for styling

function Faculty() {
  return (
    <Row>
      {teachersData.map((teacher, index) => (
        <Col key={index}>
          <TeacherCard teacher={teacher} />
        </Col>
      ))}
    </Row>
  );
}

const TeacherCard = ({ teacher }) => {
  return (
    <Card style={{ width: '15rem', textAlign: 'center' }}>
      <div className="circular-image-container">
        <Card.Img className="circular-image" variant="top" src={bluetoothImage} />
      </div>
      <Card.Body>
        <Card.Title className="name">{teacher.name}</Card.Title>
        <Card.Subtitle>{teacher.designation}</Card.Subtitle>
        <Card.Text>{teacher.email}</Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Faculty;
