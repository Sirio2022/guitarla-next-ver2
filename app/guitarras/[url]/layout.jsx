export async function generateMetadata({ params }, parent) {
  const { url } = params;

  return {
    title: `GuitarLA - ${url}`,
    description: `Guitarra ${url} de nuestro catálogo de guitarras en GuitarLA`,
    url: `${parent}${url}`,
  };
}

export default function GuitarraLayout({ children }) {
  return <div>{children}</div>;
}
