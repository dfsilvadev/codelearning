import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  color: {
    gray: {
      900: '#181B23',
      800: '#1F2029',
      700: '#353646',
      600: '#4B4D63',
      500: '#616480',
      400: '#797D9A',
      300: '#9699B0',
      200: '#B3B5C6',
      100: '#D1D2DC',
      50: '#EEEEF2',
    },
  },
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  styles: {
    global: {
      body: {
        background: 'gray.900',
        color: 'gray.50',
      },
      strong: {
        fontFamily: 'Rajdhani',
        fontWeight: 'bold',
      },
    },
  },
});

export default theme;
