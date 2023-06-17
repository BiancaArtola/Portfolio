import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

interface IProps {
  children: JSX.Element;
}

export default Layout;
