import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function CountryCard({ country }) {
  return (
    <Card
      className="mb-3 border w-100 border border-black rounded-0 p-1"
      style={{ boxShadow: "3px 3px #cacacaff" }}
      >
      <Row className="g-2 align-items-center justify-content-start">
        <Col xs={3} className="d-flex align-items-center justify-content-center">
          <img src={country.flag} alt={country.name}
            style={{ width: 100, height: 50, objectFit: "cover"  }} />
        </Col>
        <Col xs={9}>
          <div style={{ fontWeight: 500, fontSize: 16 }}>{country.name}</div>
          <div style={{ color: '#555', fontSize: 14 }}>{country.region}</div>
        </Col>
      </Row>
    </Card>
  );
}
