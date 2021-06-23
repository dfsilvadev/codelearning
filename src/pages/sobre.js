import { Flex } from "@chakra-ui/react";

import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";

export default function Sobre() {
  return (
    <Layout>
      <Breadcrumb page="Sobre" />
      <Flex
        w="100%"
        maxW={1480}
        flex="1"
        marginX="auto"
        paddingX="6"
        pb="6"
        justify="center"
        direction="column"
      >
        <h1>Series page</h1>
      </Flex>
      <Footer />
    </Layout>
  );
}
