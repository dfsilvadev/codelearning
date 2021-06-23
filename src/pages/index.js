import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import TechnologiesBox from "../components/TechnologiesBox";
import { getAllTechnologies } from "../styles/dato-cms";

export default function Home({ technologies }) {
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
          pb="6"
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
            <Text as="span" display="block">
              direto ao ponto
            </Text>
            <Text
              as="span"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
            >
              100% free.
            </Text>
          </Heading>

          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }}>
            <Text as="span" display="block">
              Mantenha seus conhecimentos atualizados com as mais novas{" "}
            </Text>
            <Text as="span">tecnologias que estão disponíveis no mercado!</Text>
          </Text>

          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="gray"
              variant="outline"
              size="lg"
              href="/series"
            >
              Bora começar!
            </Button>
          </Box>

          <TechnologiesBox technologies={technologies} />
        </Flex>

        <Footer />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();
  return {
    props: {
      technologies,
    },
    revalidate: 3600,
  };
};
