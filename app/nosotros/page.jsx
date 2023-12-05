import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import Image from 'next/image';
import styles from './nosotros.module.scss';

export default function Nosotros() {
  return (
    <>
      <LayoutPrincipal>
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.nosotros}>
            <div>
              <Image
                src="/img/nosotros.jpg"
                alt="Imagen de nosotros"
                width={1000}
                height={800}
              />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                dicta nesciunt sequi repellendus unde minus odit, sunt quis
                labore, perferendis consequuntur fuga ipsa, eius vel omnis
                beatae minima dignissimos maiores.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                dicta nesciunt sequi repellendus unde minus odit, sunt quis
                labore, perferendis consequuntur fuga ipsa, eius vel omnis
                beatae minima dignissimos maiores.
              </p>
            </div>
          </div>
        </main>
      </LayoutPrincipal>
    </>
  );
}
