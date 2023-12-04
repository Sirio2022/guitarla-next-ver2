import Header from '../header/header';
import Footer from '../footer/footer';

export default function LayoutPrincipal({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
