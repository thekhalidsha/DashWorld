import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2>404 - Page Not Found</h2>
      <Button variant="dark" onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
}
