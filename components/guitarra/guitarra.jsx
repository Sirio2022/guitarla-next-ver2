'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './guitarra.module.scss';

export default function Guitarra({ guitarra }) {
  const { nombre, imagen, precio, descripcion, url } = guitarra;

  const texto = descripcion.map((parrafo) =>
    parrafo.children
      .map((texto) => texto.text)
      .flat()
      .join('\n')
  );

  return (
    <div className={styles.guitarra}>
      
      <Image
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen de ${nombre}`}
        width={200}
        height={200}
        
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{texto}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} className={styles.enlace}>Ver Producto</Link>
      </div>
    </div>
  );
}
