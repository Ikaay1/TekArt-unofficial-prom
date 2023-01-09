import { extendTheme } from '@chakra-ui/react';

//colors
const colors = {
  tekArt: {
    base: '#C10000',
    white: '#FFFFFF',
    white2: '#FFFCFC',
    secondaryGrey1: '#232323',
    mixedBase: 'linear-gradient(144.09deg, #C10000 12.14%, #6E93F1 89.06%)',
  },
};

//
const breakpoints = {
  base: '0px',
  sm: '400px',
  md: '700px',
  lg: '1100px',
  mlg: '1430px',
  xl: '1700px',
};

//initial config
// const config: ThemeConfig = {
//   initialColorMode: 'system',
//   useSystemColorMode: true,
// };

//font sizes
const fontSizes = {
  //50px
  big: '3.125rem',
  //30px
  bigHead: '1.875rem',
  //25px
  head: '1.563rem',
  //20px
  smHead: '1.25rem',
  //16px
  subHead: '1rem',
  //14px
  smSubHead: '0.875rem',
  //8px
  xs: '0.5rem',
  //12px
  sm: '12px',
  //36px
  medium: '36px',
  //48px
  big2: '48px',
  //18px
  sm2: '18px',
  //40px
  big3: '40px',
  //6.5px
  xs2: '6.5px',
  //59px
  xl: '59px',
  //22.5px
  smHead2: '22.5px',
  //10px
  sm3: '10px',
  //11px
  xsl: '0.688rem',
};

const components = {
  Checkbox: {
    baseStyle: {
      control: {
        bg: 'none',
        border: '2px solid #C10000',
        _checked: {
          bg: '#C10000',
          color: '#fff',
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
          _hover: {
            bg: '#C10000',
          },
        },

        boxShadow: 'none',
      },
    },
    variants: {
      base: {
        control: {
          _checked: {
            bg: '#C10000',
          },
        },
      },
    },
  },

  Radio: {
    baseStyle: {
      control: {
        bg: 'clique.secondaryGrey1',
        border: '2px solid #C10000',
        _checked: {
          bg: 'clique.mixedBase',
          color: 'clique.mixedBase',
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
          _hover: {
            bg: 'clique.mixedBase',
          },
        },

        boxShadow: 'none',
      },
    },
  },
};

const theme = extendTheme({
  colors,
  // config,
  breakpoints,
  components,
  fontSizes,
});

export default theme;
