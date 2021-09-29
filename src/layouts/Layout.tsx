import { HashRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import Topnav from "../components/Topnav";

const Layout = () => {
  return (
    <Router>
      <Topnav />
      <Footer />
    </Router>
  );
};

export default Layout;
