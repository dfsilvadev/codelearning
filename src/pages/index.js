import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | codelearning.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Flex
          w="100%"
          maxW={1480}
          flex="1"
          marginX="auto"
          paddingX="6"
          justify="center"
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={{ base: "42px", md: "52px", lg: "72px" }}
            lineHeight={{ base: "46px", md: "56px", lg: "76px" }}
            mb={4}
            fontWeight="900"
          >
            Aprenda programação
            <Box>direto ao ponto</Box>
            <Box bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
              100% free.
            </Box>
          </Heading>

          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            <Box>
              Mantenha seus conhecimentos atualizados com as mais novas{" "}
            </Box>
            <Box>tecnologias que estão disponíveis no mercado!</Box>
          </Text>

          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="pink"
              variant="outline"
              size="lg"
              href="/series"
            >
              Bora começar!
            </Button>
          </Box>
        </Flex>

        <Footer />
      </Layout>
    </>
  );
}
