'use client';

import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/index.jsx';
import styles from './carrito.module.scss';
import Image from 'next/image.js';

export default function Carrito() {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const { carritoLS, actualizarCantidad } = useContext(AppContext);

  useEffect(() => {
    const carritoLocal = localStorage.getItem('carrito');
    if (carritoLocal) {
      setCarrito(JSON.parse(carritoLocal));
    }
  }, []);

  useEffect(() => {
    if (carritoLS) {
      setCarrito(carritoLS);
    }
  }, [carritoLS]);

  useEffect(() => {
    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(total);
  }, [carrito]);

  return (
    <LayoutPrincipal>
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos en el carrito</h2>

            {carrito?.length === 0
              ? 'No hay articulos'
              : carrito.map((item) => (
                  <div key={item.id} className={styles.producto}>
                    <div>
                      <Image
                        src={item.imagen.data.attributes.url}
                        alt={`Imagen de ${item.nombre}`}
                        width={200}
                        height={200}
                        style={{
                          width: 'auto',
                          height: 'auto',
                        }}
                        priority={true}
                      />
                    </div>

                    <div>
                      <h3>{item.nombre}</h3>

                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              ...item,
                              cantidad: +e.target.value,
                            })
                          }
                          value={item.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        <span>$ {item.precio}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: <span>$ {item.cantidad * item.precio}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>
              Total a pagar: <span>$ {total}</span>
            </p>


          </aside>
        </div>
      </main>
    </LayoutPrincipal>
  );
}
