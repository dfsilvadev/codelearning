import {
  Box,
  Center,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";

export default function TechnologiesBox({ technologies }) {
  const [currentTechnologies, setCurrentTechnologies] = useState(technologies);

  function showAllTechnologies() {
    const all = currentTechnologies.map((t) => {
      t.defaultVisibility = true;
      return t;
    });

    setCurrentTechnologies(all);
  }

  const hiddenTechnologies = currentTechnologies?.filter(
    (item) => !item.defaultVisibility
  ).length;

  return (
    <Box>
      <Wrap>
        {currentTechnologies
          ?.filter((t) => t.defaultVisibility)
          ?.sort((a, b) => a.ordem - b.ordem)
          ?.map((item) => (
            <WrapItem key={item.id}>
              <Center
                w="100px"
                h="100px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                flexDirection="column"
                transition="border-color 0.2s"
                _hover={{ borderColor: "pink.500" }}
              >
                <Image
                  src={item.logo.url}
                  alt={item.nome}
                  width="40px"
                  height="40px"
                  title={item.nome}
                />
                <Text fontSize="sm" textAlign="center" fontWeight="bold" mt={2}>
                  {item.nome}
                </Text>
              </Center>
            </WrapItem>
          ))}
        {hiddenTechnologies > 0 && (
          <WrapItem>
            <Center
              w="100px"
              h="100px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              flexDirection="column"
            >
              <Link onClick={showAllTechnologies}>
                <Text fontSize="sm" textAlign="center" fontWeight="bold" mt={2}>
                  {`+${hiddenTechnologies} outras`}
                </Text>
              </Link>
            </Center>
          </WrapItem>
        )}
      </Wrap>
    </Box>
  );
}
