import '../../styles/index.css';
import Layout from "../components/layout/layout";
import { ThemeProvider } from "../dark-mode-future/theme-context";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
          <Component {...pageProps}/>
      </Layout>
    </ThemeProvider>
  )
}