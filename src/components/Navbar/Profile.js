import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import useAuth from '../../hooks/useAuth';
import SignOutMenu from '../SignOutMenu';

export default function Profile({ showProfileData, ...props }) {
  const { user } = useAuth();
  return (
    <>
      {showProfileData && (
        <Flex align="center">
          <Box marginRight="4" textAlign="right">
            <Text fontWeight="bold">{user.name}</Text>
            <Text color="gray.500" fontSize="small" fontWeight="bold">
              {user.email}
            </Text>
          </Box>
          <SignOutMenu>
            <Avatar
              size="md"
              name={user.name}
              src={user.photoUrl}
              background="#00ff5f"
              {...props}
            />
          </SignOutMenu>
        </Flex>
      )}
    </>
  );
}
