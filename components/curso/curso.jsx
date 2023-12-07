import styles from './curso.module.scss';

export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;

  const texto = contenido
    .map((desc) => desc.children.map((descrip) => descrip.text))
    .flat() // [[],[],[]] => []
    .join('\n'); // [texto,texto,texto]

  return (
    <section
      className={styles.curso}
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url}`,
      }}
    >
      <div className={`contenedor ${styles.curso_grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{texto}</p>
        </div>
      </div>
    </section>
  );
}
