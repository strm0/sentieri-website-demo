'use client';

import { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';

export default function SidebarsContainer() {
  const [openSide, setOpenSide] = useState<'left' | 'right' | null>(null);
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  const handleToggle = (side: 'left' | 'right') => {
    if (openSide === side) {
      setOpenSide(null);
    } else {
      setOpenSide(side);
    }
  };

  return (
    <>
      {/* Left Sidebar (Di Stelle) */}
      <aside
        className="transition-all duration-300 ease-in-out"
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--stelle-green)',
          height: 'calc(100vh - var(--header-height))',
          position: 'fixed',
          left: openSide === 'left' ? 'calc(62vw - var(--sidebar-width))' : '0',
          top: 'var(--header-height)',
          zIndex: 50,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '1px solid var(--black)',
          borderRight: '1px solid var(--black)',
        }}
        onClick={() => handleToggle('left')}
        onMouseEnter={() => setLeftHovered(true)}
        onMouseLeave={() => setLeftHovered(false)}
        aria-label="Open Di Stelle menu"
      >
        <div style={{ transform: 'rotate(-90deg)' }}>
          <AnimatedUnderline active={leftHovered} lineHeight={1}>
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

      {/* Right Sidebar (Di Sogni) */}
      <aside
        className="transition-all duration-300 ease-in-out"
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--sogni-pink)',
          height: 'calc(100vh - var(--header-height))',
          position: 'fixed',
          right: openSide === 'right' ? 'calc(62vw - var(--sidebar-width))' : '0',
          top: 'var(--header-height)',
          zIndex: 50,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '1px solid var(--black)',
          borderRight: '1px solid var(--black)',
        }}
        onClick={() => handleToggle('right')}
        onMouseEnter={() => setRightHovered(true)}
        onMouseLeave={() => setRightHovered(false)}
        aria-label="Open Di Sogni menu"
      >
        <div style={{ transform: 'rotate(90deg)' }}>
          <AnimatedUnderline active={rightHovered} lineHeight={1}>
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

      {/* Menu Overlays */}
      <MenuOverlay
        isOpen={openSide === 'left'}
        side="left"
        onClose={() => setOpenSide(null)}
      />
      <MenuOverlay
        isOpen={openSide === 'right'}
        side="right"
        onClose={() => setOpenSide(null)}
      />
    </>
  );
}
