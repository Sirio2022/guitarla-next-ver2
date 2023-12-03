import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import './normalize.css';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'], weights: [400, 700, 900] });

export const metadata = {
  title: 'GuitarLA - Tienda de guitarras en Medellín',
  description: 'Tienda de guitarras en Medellín y clases de guitarra online y presenciales.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
