import LayoutPrincipal from '@/components/layoutPrincipal/layoutPrincipal';
import ListadoGuitarras from '@/components/listado-guitarras/listado-guitarras';

export default function Tienda() {
  return (
    <LayoutPrincipal>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

        <ListadoGuitarras />
      </main>
    </LayoutPrincipal>
  );
}
