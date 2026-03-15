'use client';

import { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';

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
          right: isMenuOpen ? 'calc(62vw - var(--sidebar-width))' : '0',
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
        <div style={{ transform: 'rotate(90deg)' }}>
          <AnimatedUnderline active={isHovered} lineHeight={1}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.2rem',
                letterSpacing: '-0.07em',
                whiteSpace: 'nowrap',
                color: 'var(--black)',
                display: 'block',
              }}
            >
              di Sogni
            </span>
          </AnimatedUnderline>
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
