import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import Post from '@/components/post/post';
import styles from './blog.module.scss';

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`, {
    next: {
      revalidate: 1,
    },
  });

  if (!res.ok) {
    throw new Error('No se pudo obtener la lista de posts');
  }

  const { data: posts } = await res.json();

  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <LayoutPrincipal>
      <main className="contenedor">
        <h1 className="heading">Blog</h1>

        <div className={styles.posts_grid}>
          {posts.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </LayoutPrincipal>
  );
}
