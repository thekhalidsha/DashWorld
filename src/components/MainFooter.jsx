import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Facebook, Linkedin, Twitter, Github } from 'lucide-react';

export default function MainFooter() {
  return (
    <footer className="mt-auto pt-3 pb-1" style={{ background: 'none' }}>
      <Container className="text-center">
        <div className="d-flex justify-content-center gap-3 mb-2">
          <Button variant="outline-dark" className="rounded-circle p-2">
            <Facebook size={22} />
          </Button>
          <Button variant="outline-dark" className="rounded-circle p-2">
            <Linkedin size={22} />
          </Button>
          <Button variant="outline-dark" className="rounded-circle p-2">
            <Twitter size={22} />
          </Button>
          <Button variant="outline-dark" className="rounded-circle p-2">
            <Github size={22} />
          </Button>
        </div>
        <div style={{ fontSize: 15, color: '#555' }}>Example@email.com</div>
        <div className="text-muted small mt-1" style={{ fontSize: 13 }}>
          Copyright &copy; 202 Name. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
