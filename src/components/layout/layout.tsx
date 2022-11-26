import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

// marginTop value is equal to height of navbar.
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{marginTop: '100px'}}>{children}</main>
      <Footer />
    </>
  )
}