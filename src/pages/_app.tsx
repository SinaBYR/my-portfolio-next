import '../../styles/index.css';
import Layout from "../components/layout/layout";
import { ThemeProvider } from "../dark-mode-future/theme-context";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider>
        <Component {...pageProps}/>
      </ThemeProvider>
    </Layout>
  )
}