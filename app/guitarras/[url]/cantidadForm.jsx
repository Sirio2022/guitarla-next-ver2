'use client';

import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../../context/index.jsx';
import styles from './guitarra.module.scss';
import Swal from 'sweetalert2';

export default function Formulario({ guitarra }) {
  const { agregarAlCarrito } = useContext(AppContext);

  const [cantidad, setCantidad] = useState(Number(0));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes seleccionar una cantidad',
      });
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.id,
      nombre: guitarra.attributes.nombre,
      cantidad,
      precio: guitarra.attributes.precio,
      imagen: guitarra.attributes.imagen,
    };

    agregarAlCarrito(guitarraSeleccionada);
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <label htmlFor="cantidad">Cantidad:</label>
      <select id="cantidad" onChange={(e) => setCantidad(+e.target.value)}>
        <option value="0">-- Selecciona la cantidad --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input type="submit" value="Agregar al carrito" />
    </form>
  );
}
