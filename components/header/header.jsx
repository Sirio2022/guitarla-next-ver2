// Autor: Juan Manuel Alvarez Bermudez - 2023
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';

export default function Header() {
  const router = usePathname();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/img/logo.svg"
            alt="logo"
            width={200}
            height={200}
            priority="false"
          />
        </Link>

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

          <Link href="/carrito">
            <Image
              src="/img/carrito.png"
              alt="carrito"
              width={20}
              height={20}
              style={{
                width: 'auto',
                height: 'auto',
              }}
              priority="false"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
