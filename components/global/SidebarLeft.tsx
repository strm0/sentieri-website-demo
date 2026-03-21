'use client';

import { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';

export default function SidebarLeft() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <aside
        className="transition-all duration-300 ease-in-out"
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--stelle-green)',
          height: 'calc(100vh - var(--header-height))',
          position: 'fixed',
          left: isMenuOpen ? 'calc(62vw - var(--sidebar-width))' : '0',
          top: 'var(--header-height)',
          zIndex: 50,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '1px solid var(--black)',
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open Di Stelle menu"
      >
        <div style={{ transform: 'rotate(-90deg)' }}>
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
              di Stelle
            </span>
          </AnimatedUnderline>
        </div>
      </aside>

      <MenuOverlay
        isOpen={isMenuOpen}
        side="left"
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
