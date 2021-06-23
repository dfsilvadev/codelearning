import { Breadcrumb, BreadcrumbItem, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

export default function BreadcrumbPage({ page }) {
  return (
    <Flex w="100%" maxW={1480} h="20" marginX="auto" paddingX="6" pb="6">
      <Breadcrumb
        spacing="8px"
        separator={<RiArrowRightSLine color="gray.500" />}
        fontWeight="bold"
        fontSize="14"
      >
        <BreadcrumbItem _hover={{ color: "gray.100" }}>
          <Link href="/">Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem color="gray.500">
          <Text>{page}</Text>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}
