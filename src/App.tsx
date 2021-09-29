import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./layouts/Layout";

function App() {
  return (
    <ChakraProvider resetCSS={true}>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
