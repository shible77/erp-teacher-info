// Faculty.jsx
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import teachersData from './teachers.json'; // Import the JSON file
import "bootstrap/dist/css/bootstrap.min.css";
import './Faculty.css'; // Import CSS file for styling
import sampleImage from '../resource/sample.jpg';

function Faculty() {
  const rows = [];
  for (let i = 0; i < teachersData.length; i += 4) {
    rows.push(
      <Row key={i}>
        {teachersData.slice(i, i + 4).map((teacher, index) => (
          <Col key={index} style={{ width: '25%', marginBottom: '1.5rem' }}>
            <TeacherCard teacher={teacher} />
          </Col>
        ))}
      </Row>
    );
  }
  return (
    <div className='initialContainer'>
      <h3 className="faculty-heading">Our Faculty Members</h3>
      <div>{rows}</div>
    </div>
  );
}

const TeacherCard = ({ teacher }) => {
  return (
    <Card>
      <div className="circular-image-container">
        <Card.Img className="circular-image" variant="top" src={sampleImage} />
      </div>
      <Card.Body>
        <Card.Title className="name">{teacher.name}</Card.Title>
        <Card.Subtitle>{teacher.designation}</Card.Subtitle>
        <Card.Text>{teacher.email}</Card.Text>
        <a href={teacher.detailsLink} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" style={{marginBottom: '1rem' }}>More Details</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Faculty;
