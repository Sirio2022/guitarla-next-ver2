import Link from 'next/link';
import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';

export default function NotFound() {
  return (
    <LayoutPrincipal>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          No encontrado
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          No pudimos encontrar la página que estás buscando.
        </p>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
          Volver al inicio
        </Link>
      </div>
    </LayoutPrincipal>
  );
}
