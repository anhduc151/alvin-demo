import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
