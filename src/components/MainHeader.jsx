import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Menu } from 'lucide-react';

const FILTERS = ["All", "Asia", "Europe"];

export default function MainHeader({ filter, setFilter }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Navbar bg="white" className="py-2 px-3 border-bottom justify-content-between align-items-center">
        <span style={{ fontWeight: 500, fontSize: 17 }}>Countries</span>
        <nav className="d-none d-md-flex align-items-center gap-3">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="filter-btn"
              style={{
                background: "none",
                border: "none",
                outline: "none",
                fontWeight: 500,
                color: filter === f ? "#3d3d3d" : "#444",
                padding: "0 6px 5px 6px",
                position: "relative",
                fontSize: 16,
                borderBottom: filter === f ? "2.5px solid #3d3d3d" : "2.5px solid transparent",
                transition: "border 0.2s"
              }}
            >
              {f}
            </button>
          ))}
        </nav>

        <Button variant="link" className="d-md-none ms-auto" onClick={() => setDrawerOpen(true)} style={{ color: '#222', padding: '0 6px' }}>
          <Menu size={24} />
        </Button>
      </Navbar>

      <div
        className={`drawer-container ${drawerOpen ? "open" : ""}`}
        style={{
          position: 'fixed', left: 0, top: 0, bottom: 0, width: 200,
          background: '#fff', boxShadow: '2px 0 6px rgba(0,0,0,0.12)', zIndex: 1100,
          transition: 'transform 0.3s', transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          paddingTop: 40
        }}>
        <Button variant="light" className="mb-3 ms-2" onClick={() => setDrawerOpen(false)}>
          Close
        </Button>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => { setFilter(f); setDrawerOpen(false); }}
            className="filter-btn"
            style={{
              background: "none", border: "none", outline: "none",
              textAlign: "left", width: "100%",
              fontWeight: 500, color: filter === f ? "#3d3d3d" : "#444",
              padding: "12px 0 8px 18px",
              borderBottom: filter === f ? "2px solid #3d3d3d" : "2px solid transparent",
              fontSize: 16,
            }}>
            {f}
          </button>
        ))}
      </div>
      {drawerOpen &&
        <div className="drawer-backdrop"
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.08)', zIndex: 1099
          }}
          onClick={() => setDrawerOpen(false)} />}
    </>
  );
}
