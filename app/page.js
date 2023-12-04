import Link from 'next/link';

import LayoutPrincipal from '../components/layoutPrincipal/layout';

export default function Home() {
  return (
    <>
      <LayoutPrincipal>
        <h1>Home</h1>
        <Link href="/nosotros">Nosotros</Link>
      </LayoutPrincipal>
    </>
  );
}
