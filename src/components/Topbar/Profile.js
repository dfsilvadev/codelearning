import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export default function Profile({ showProfileData = false }) {
  return (
    <>
      {showProfileData && (
        <Flex
          align="center"
          borderLeftWidth={1}
          borderColor="gray.700"
          paddingLeft="6"
        >
          <Box marginRight="4" textAlign="right">
            <Text>Daniel Silva</Text>
            <Text color="gray.300" fontSize="small">
              dfsilva.dxp@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Daniel Silva" background="pink.500" />
        </Flex>
      )}
    </>
  );
}
