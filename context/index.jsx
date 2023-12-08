'use client';

import { createContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [carrito, setCarrito] = useState(() => {
    if (typeof window !== 'undefined') {
      const carritoLocal = window.localStorage.getItem('carrito');
      return carritoLocal ? JSON.parse(carritoLocal) : [];
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (guitarra) => {
    if (carrito.some((item) => item.id === guitarra.id)) {
      const carritoActualizado = carrito.map((item) => {
        if (item.id === guitarra.id) {
          item.cantidad = guitarra.cantidad;
        }
        return item;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((item) => {
      if (item.id === guitarra.id) {
        item.cantidad = guitarra.cantidad;
      }
      return item;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActalizado = carrito.filter((item) => item.id !== id);
    setCarrito(carritoActalizado);
  };

  return (
    <AppContext.Provider
      value={{
        carritoLS: carrito,
        agregarAlCarrito,
        eliminarGuitarra,
        actualizarCantidad,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
