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
  fontFamily: 'var(--font-body)',
  fontSize: '2.2rem',
  fontWeight: 'normal',
  letterSpacing: '-0.07em'
}}>
          sentieri
        </span>
      </Link>

    </header>
  );
}
