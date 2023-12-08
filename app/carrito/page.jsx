'use client';

import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/index.jsx';
import styles from './carrito.module.scss';
import Image from 'next/image.js';
import Swal from 'sweetalert2';

export default function Carrito() {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const { carritoLS, actualizarCantidad, eliminarGuitarra } =
    useContext(AppContext);

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

  const handleClick = (id) => () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Una vez eliminado no podras recuperarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarGuitarra(id);
        Swal.fire('Eliminado!', 'Tu producto ha sido eliminado', 'success');
      }
    });
  };

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
                        priority={false}
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

                    <button
                      className={styles.btn_eliminar}
                      type="button"
                      onClick={handleClick(item.id)}
                    >
                      X
                    </button>
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
