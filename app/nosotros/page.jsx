import Link from 'next/link';
import LayoutPrincipal from '@/components/layoutPrincipal/layout';

export default function Nosotros() {
  return (
    <>
      <LayoutPrincipal>
        <h1>Nosotros</h1>
        <Link href="/">Inicio</Link>
      </LayoutPrincipal>
    </>
  );
}
