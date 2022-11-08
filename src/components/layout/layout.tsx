import { Navbar } from '../navbar/navbar';
import { Footer } from '../Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from '../../dark-mode-future/theme-context';

export default function Layout({ children }) {
  const darkMode = useContext(ThemeContext);
  return (
    <div style={{color: darkMode ? '#f7f7f7' : '#1e262c'}}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}