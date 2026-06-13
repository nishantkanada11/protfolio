import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/layout/ScrollProgress";

const MainLayout = ({ children }) => {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="pt-28">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;