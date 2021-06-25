import { Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { getAllSeries } from '../../services/dato-cms';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import SerieCard from '../../components/SerieCard';

export default function Series({ series }) {
  console.log(series);
  return (
    <>
      <Head>
        <title>Séries | codelearning.</title>
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
                  Acompanhe as melhores séries de programação
                  <Text color="#00ff5f">direto ao ponto!</Text>
                </Text>
              </Flex>
            </Center>
            <Center>
              <Image src="images/developer.svg" />
            </Center>
          </SimpleGrid>
          <Flex
            w="100%"
            maxW={1480}
            marginX="auto"
            align="flex-start"
            paddingY="6"
            paddingX="6"
            direction="column"
          >
            <Text fontSize="xx-large" fontWeight="bold" mb="6">
              Séries
            </Text>
            <SerieCard series={series} />
          </Flex>
          <Footer />
        </Flex>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const series = await getAllSeries();

  return {
    props: { series },
    revalidate: 3600,
  };
};
