import Navbar from "@/components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "@/components/Footer";

const HomeLayout = () => {
  // global loading
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <main>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>

      <Footer />
    </main>
  );
};

export default HomeLayout;
