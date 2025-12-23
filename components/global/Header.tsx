import Link from 'next/link';

export default function Header() {
  return (
    <header
      style={{
        height: 'var(--header-height)',
        background: 'var(--header-beige)',
        borderBottom: '1px solid var(--black)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 24px',
      }}
    >
      {/* Logo / Brand - Centered */}
      <Link
        href="/"
        className="clickable"
        style={{
          textDecoration: 'none',
          color: 'var(--black)',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 'normal'
        }}>
          Sentieri
        </span>
      </Link>

      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Link
          href="/shop"
          className="clickable"
          style={{
            textDecoration: 'none',
            color: 'var(--black)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          SHOP
        </Link>

        {/* Language Toggle */}
        <div style={{
          display: 'flex',
          gap: '8px',
          fontFamily: 'var(--font-body)',
          fontSize: '1rem'
        }}>
          <span
            className="clickable"
            style={{ fontWeight: 'bold', color: 'var(--black)' }}
          >
            EN
          </span>
          <span style={{ color: 'var(--black)' }}>/</span>
          <span
            className="clickable"
            style={{ color: 'var(--black)', opacity: 0.5 }}
          >
            IT
          </span>
        </div>
      </nav>
    </header>
  );
}
