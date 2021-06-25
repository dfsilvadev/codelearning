import { useRouter } from 'next/router';
import { Box, Badge, Image, Text, SimpleGrid } from '@chakra-ui/react';

export default function SerieCard({ series }) {
  const router = useRouter();

  const handleClick = (slug) => {
    router.push(`/series/${slug}`);
  };
  return (
    <>
      <SimpleGrid columns={[1, 2, 4]} gap="6" h="auto">
        {series.map((serie) => (
          <Box
            key={serie.id}
            onClick={() => handleClick(serie.slug)}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            transition="border-color 0.2s"
            _hover={{ borderColor: '#00ff5f' }}
            padding={2}
          >
            <Image src={serie.thumbUrl.url} alt={serie.name} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Novo
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {serie.seasons.length} temporada(s)
                </Box>
              </Box>

              <Box
                my={2}
                fontWeight="bold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {serie.name}
              </Box>
              <Text
                h="55px"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                }}
                fontSize="12"
                dangerouslySetInnerHTML={{ __html: serie.description }}
              />

              <Box d="flex" mt="3" alignItems="center">
                <Badge>{serie.seriesType}</Badge>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
