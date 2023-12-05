import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import Guitarra from '@/components/guitarra/guitarra';
import styles from './tienda.module.scss';

async function getGuitarras() {
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error('No se pudo obtener la lista de guitarras');
  }

  const { data: guitarras } = await res.json();

  return guitarras;
}

export default async function Tienda() {
  const guitarras = await getGuitarras();

  return (
    <LayoutPrincipal>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

        <div className={styles.guitarras_grid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </LayoutPrincipal>
  );
}
