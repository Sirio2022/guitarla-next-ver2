import Image from 'next/image';
import Link from 'next/link';
import styles from './post.module.scss';
import { formatearFecha } from '@/utils/helpers';

export default function Post({ post }) {
  const { titulo, imagen, contenido, url, publishedAt } = post;

  const texto = contenido
    .map((parrafo) => {
      return parrafo.children.map((texto) => {
        return texto.text;
      });
    })
    .flat()
    .join('\n');

  return (
    <article className={styles.post}>
      <Image
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen de ${titulo}`}
        width={600}
        height={200}
      />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{texto}</p>
        <Link href={`/posts/${url}`} className={styles.enlace}>
          Leer más
        </Link>
      </div>
    </article>
  );
}
