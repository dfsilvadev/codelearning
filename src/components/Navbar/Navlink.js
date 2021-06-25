import { Link, Text } from '@chakra-ui/react';
import Activelink from './Activelink';

export default function Navlink({ children, href, ...props }) {
  return (
    <Activelink href={href} passHref>
      <Link display="flex" align="center" {...props}>
        <Text fontSize="13" fontWeight="bold" textTransform="uppercase">
          {children}
        </Text>
      </Link>
    </Activelink>
  );
}
