import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import styles from './carrito.module.scss';

export default function Carrito() {
  return (
    <LayoutPrincipal>
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos en el carrito</h2>
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: $ 0.00</p>
          </aside>
        </div>
      </main>
    </LayoutPrincipal>
  );
}
