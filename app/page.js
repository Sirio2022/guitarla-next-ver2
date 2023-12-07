import Guitarra from '@/components/guitarra/guitarra';
import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import styles from '@/app/tienda/tienda.module.scss';
import Post from '@/components/post/post';
import stylesPost from '@/app/blog/blog.module.scss';

async function getData() {
  const urlGuitarra = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const urlPost = await fetch(`${process.env.API_URL}/posts?populate=imagen`, {
    next: {
      revalidate: 1,
    },
  });

  if (!urlGuitarra.ok || !urlPost.ok) {
    return {
      props: {
        errorCode: urlGuitarra.status,
      },
    };
  }

  const [urlGuitarraData, urlPostData] = await Promise.all([
    urlGuitarra.json(),
    urlPost.json(),
  ]);

  return {
    urlGuitarraData,
    urlPostData,
  };
}

export default async function Home() {
  const data = await getData();
  const { urlGuitarraData, urlPostData } = data;
  console.log(urlGuitarraData.data, urlPostData.data);

  return (
    <>
      <LayoutPrincipal>
       <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <div className={styles.guitarras_grid}>
          {urlGuitarraData.data.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>

        </main>

        <section className='contenedor'>
          <h1 className='heading'>Nuestro Blog</h1>

          <div className={stylesPost.posts_grid}>
          {urlPostData.data.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>

        </section>
      </LayoutPrincipal>
    </>
  );
}
