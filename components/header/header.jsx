// Autor: Juan Manuel Alvarez Bermudez - 2023
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';

export default function Header() {
  const router = usePathname();
  console.log(router);

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image
          className={styles.logo}
          src="/img/logo.svg"
          alt="logo"
          width={200}
          height={200}
          priority="false"
        />

        <nav className={styles.navegacion}>
          <Link href="/" className={router === '/' ? styles.active : ''}>
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={router === '/nosotros' ? styles.active : ''}
          >
            Nosotros
          </Link>
          <Link
            href="/tienda"
            className={router === '/tienda' ? styles.active : ''}
          >
            Tienda
          </Link>
          <Link
            href="/blog"
            className={router === '/blog' ? styles.active : ''}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
