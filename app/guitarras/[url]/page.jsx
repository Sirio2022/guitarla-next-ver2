async function getGuitarra({ url }) {
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

  return guitarra[0].attributes;
}

export default async function Guitarra({ params: { url } }) {
    const guitarra = await getGuitarra({ url });
    console.log(guitarra);

  return <div>Guitarra</div>;
}
