import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CountryCard from './CountryCard';

export default function CountryList({ countries }) {
  return (
    <Row>
      {countries.map((country, idx) => (
        <Col xs={12} md={6} key={country.name + idx} className="mb-3 d-flex justify-content-center">
          <CountryCard country={country} />
        </Col>
      ))}
    </Row>
  );
}
