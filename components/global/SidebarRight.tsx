'use client';

import { useState } from 'react';
import MenuOverlay from './MenuOverlay';

export default function SidebarRight() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <aside
        className="transition-all duration-300 ease-in-out"
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--sogni-pink)',
          height: 'calc(100vh - var(--header-height))',
          position: 'fixed',
          right: isMenuOpen ? 'calc(50vw - var(--sidebar-width))' : '0',
          top: 'var(--header-height)',
          zIndex: 50,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '1px solid var(--black)',
          borderRight: '1px solid var(--black)',
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open Di Sogni menu"
      >
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            transform: 'rotate(90deg)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
              color: 'var(--black)',
              display: 'block',
            }}
          >
            di Sogni
          </span>
          <div
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              width: isHovered ? '100%' : 0,
              height: '1px',
              background: 'var(--black)',
              transition: 'width 0.3s ease',
              transform: 'translateZ(0)',
              willChange: 'width',
            }}
          />
        </div>
      </aside>

      <MenuOverlay
        isOpen={isMenuOpen}
        side="right"
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
