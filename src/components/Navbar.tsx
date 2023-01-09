import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box>
      <Text
        fontFamily='Public Sans'
        fontStyle='normal'
        fontWeight={500}
        fontSize={{base: '10px', lg: '36px'}}
        color='tekArt.base'
        textAlign={'center'}
        my='.3rem'
      >
        TICKETS ARE{' '}
        <Box as='span' fontWeight={'bold'}>
          LIMITED
        </Box>{' '}
        - GET YOURS NOW BEFORE WE'RE{' '}
        <Box as='span' fontWeight={'bold'}>
          SOLD OUT!
        </Box>
      </Text>
    </Box>
  );
};

export default Navbar;
