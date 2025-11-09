import React from 'react';
import { Container } from 'react-bootstrap';
import AppRoutes from './routes';

export default function App() {
  return (
    <Container fluid className="p-0 min-vh-100">
      <AppRoutes />
    </Container>
  );
}
