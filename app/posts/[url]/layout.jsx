export async function generateMetadata({ params }, parent) {
  const { url } = params;

  return {
    title: `GuitarLA - ${url}`,
    description: `Posts ${url} de nuestro Blog en GuitarLA`,
    url: `${parent}${url}`,
  };
}

export default function postsLayout({ children }) {
  return <div>{children}</div>;
}
