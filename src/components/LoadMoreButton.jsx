import React from 'react';
import { Button } from 'react-bootstrap';

export default function LoadMoreButton({ onClick }) {
  return (
    <div className="text-center my-4">
      <Button variant="dark" className='rounded-0' onClick={onClick}>Load More</Button>
    </div>
  );
}
