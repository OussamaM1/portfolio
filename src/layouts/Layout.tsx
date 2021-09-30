import { Box } from "@chakra-ui/layout";
import { HashRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import Topnav from "../components/Topnav";

const Layout = () => {
  return (
    <Router>
      <Topnav />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
      >
        <Box pt={10} pb={10}>
          <Navigation />
        </Box>
      </Box>

      <Footer />
    </Router>
  );
};

export default Layout;
