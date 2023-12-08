import Image from 'next/image';
import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import styles from './guitarra.module.scss';
import Formulario from './cantidadForm';
import { notFound } from 'next/navigation';

async function getGuitarra({ url }) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      throw new Error('No se pudo obtener la guitarra');
    }

    const { data: guitarra } = await res.json();

    if (!guitarra.length) {
      return notFound();
    }

    return guitarra[0];
  } catch (error) {
    console.log(error);
  }
}

export default async function Guitarra({ params: { url } }) {
  const guitarra = await getGuitarra({ url });

  const { nombre, imagen, precio, descripcion } = guitarra.attributes;

  const texto = descripcion.map((parrafo) =>
    parrafo.children
      .map((texto) => texto.text)
      .flat()
      .join('\n')
  );

  return (
    <LayoutPrincipal>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen de ${nombre}`}
          width={600}
          height={200}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{texto}</p>
          <p className={styles.precio}>${precio}</p>

          <Formulario guitarra={guitarra} />
        </div>
      </div>
    </LayoutPrincipal>
  );
}
