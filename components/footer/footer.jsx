import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="contenedor">
        <div className={styles.contenido}>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/blog">Blog</Link>
          </nav>

          <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
