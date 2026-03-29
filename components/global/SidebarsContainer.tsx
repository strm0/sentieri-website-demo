'use client';

import { useState, useEffect } from 'react';
import MenuOverlay from './MenuOverlay';
import MobileSidebarBar from './MobileSidebarBar';
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';
import { useCanHover } from '@/lib/useCanHover';

export default function SidebarsContainer() {
  const [openSide, setOpenSide] = useState<'left' | 'right' | null>(null);
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);
  const canHover = useCanHover();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<'left' | 'right'>).detail;
      setOpenSide(detail);
    };
    window.addEventListener('sentieri-open-sidebar', handler);
    return () => window.removeEventListener('sentieri-open-sidebar', handler);
  }, []);

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
        className="hidden lg:flex items-center justify-center transition-all duration-300 ease-in-out"
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--stelle-green)',
          height: 'calc(100vh - var(--header-height))',
          position: 'fixed',
          left: openSide === 'left' ? 'calc(62vw - var(--sidebar-width))' : '0',
          top: 'var(--header-height)',
          zIndex: 50,
          cursor: 'pointer',
          borderRight: '1px solid var(--black)',
        }}
        onClick={() => handleToggle('left')}
        onMouseEnter={canHover ? () => setLeftHovered(true) : undefined}
        onMouseLeave={canHover ? () => setLeftHovered(false) : undefined}
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
        className="hidden lg:flex items-center justify-center transition-all duration-300 ease-in-out"
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--sogni-pink)',
          height: 'calc(100vh - var(--header-height))',
          position: 'fixed',
          right: openSide === 'right' ? 'calc(62vw - var(--sidebar-width))' : '0',
          top: 'var(--header-height)',
          zIndex: 50,
          cursor: 'pointer',
          borderLeft: '1px solid var(--black)',
        }}
        onClick={() => handleToggle('right')}
        onMouseEnter={canHover ? () => setRightHovered(true) : undefined}
        onMouseLeave={canHover ? () => setRightHovered(false) : undefined}
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

      {/* Mobile Sidebar Bar (< 1024px) */}
      <MobileSidebarBar
        openSide={openSide}
        onToggle={handleToggle}
      />

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
