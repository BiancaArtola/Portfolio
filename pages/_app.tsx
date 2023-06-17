import "../styles/global.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: IProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

interface IProps {
  Component: any;
  pageProps: any;
}
