import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile({ showProfileData, ...props }) {
  return (
    <>
      {showProfileData && (
        <Flex align="center">
          <Box marginRight="4" textAlign="right">
            <Text fontWeight="bold">Daniel Silva</Text>
            <Text color="gray.500" fontSize="small" fontWeight="bold">
              dfsilva.dxp@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Daniel Silva"
            background="#00ff5f"
            {...props}
          />
        </Flex>
      )}
    </>
  );
}
