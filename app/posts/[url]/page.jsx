import Image from 'next/image';
import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import styles from './post.module.scss';
import { notFound } from 'next/navigation';
import { formatearFecha } from '@/utils/helpers';

async function getPost({ url }) {
  const res = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error('No se pudo obtener la lista de posts');
  }

  const { data: post } = await res.json();

  if (!post.length) {
    return notFound();
  }

  return post[0].attributes;
}

export default async function Post({ params: { url } }) {
  const post = await getPost({ url });

  const { titulo, imagen, contenido, publishedAt } = post;

  const texto = contenido
    .map((desc) => desc.children.map((descrip) => descrip.text))
    .flat() // [[],[],[]] => []
    .join('\n'); // [texto,texto,texto]

  return (
    <LayoutPrincipal>
      <article className={`contenedor ${styles.post}`}>
        <Image
          src={imagen?.data?.attributes.url}
          alt={`Imagen del post ${titulo}`}
          className={`${styles.imgen}`}
          width={600}
          height={200}
        />
        <div className={`${styles.contenido}`}>
          <h3>{titulo}</h3>
          <p className={`${styles.fecha}`}>{formatearFecha(publishedAt)}</p>
          <p className={`${styles.texto}`}>{texto}</p>
        </div>
      </article>
    </LayoutPrincipal>
  );
}
