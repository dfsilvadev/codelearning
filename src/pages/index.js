import { Box, Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { getAllTechnologies } from '../services/dato-cms';

import Layout from '../components/Layout';
import TechnologiesCard from '../components/TechnologiesCard';
import Footer from '../components/Footer';

export default function Home({ technologies }) {
  return (
    <>
      <Head>
        <title>Home | codelearning.</title>
      </Head>

      <Layout>
        <Flex direction="column" w="100%" h="calc(100vh - 100px)">
          <SimpleGrid
            w="100%"
            maxW={1480}
            marginX="auto"
            padding="6"
            flex="1"
            columns={[1, null, 2]}
            spacing="20px"
            align="center"
          >
            <Center>
              <Flex direction="column" align="flex-start">
                <Text
                  as="h1"
                  fontSize={{ base: '42px', md: '52px', lg: '72px' }}
                  lineHeight={{ base: '42px', md: '52px', lg: '72px' }}
                  textAlign="left"
                  fontWeight="900"
                >
                  Aprenda programação direto ao ponto
                  <Text color="#00ff5f">100% free</Text>
                </Text>
              </Flex>
            </Center>
            <Center>
              <Image src="images/learning.svg" />
            </Center>
          </SimpleGrid>
          <Box w="100%" maxW={1480} marginX="auto" padding="6">
            <TechnologiesCard technologies={technologies} />
          </Box>
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
