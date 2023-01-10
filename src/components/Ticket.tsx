import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const Ticket = () => {
  return (
    <>
      <Text
        font-family='Public Sans'
        fontStyle='normal'
        fontWeight='500'
        fontSize={{base: '36px', lg: '96px'}}
        lineHeight='98.64%'
        color='tekArt.base'
        textAlign={'center'}
      >
        Event{' '}
        <Box
          as='span'
          fontFamily={'Playfair Display'}
          fontWeight='700'
          fontStyle={'italic'}
        >
          Ticket
        </Box>
      </Text>
      <Box
        display='flex'
        flexDirection={{base: 'column', lg: 'row'}}
        justifyContent={{lg: 'center'}}
        alignItems='center'
        mt={{base: '1.9rem', lg: '2.4rem'}}
      >
        <Box display='flex'>
          <Box
            mr='1rem'
            width={{base: '109px', lg: '300px'}}
            height={{base: '168px', lg: '440px'}}
            backgroundColor='tekArt.lightGrey'
            borderRadius={{base: '15px', lg: '37px'}}
          >
            <Text
              textAlign={'center'}
              fontFamily='Public Sans'
              fontStyle='normal'
              fontWeight='700'
              fontSize={{base: '16px', lg: '36px'}}
              lineHeight='98.64%'
              color='tekArt.base'
              mt={{base: '2rem', lg: '3rem'}}
            >
              Single R
            </Text>
          </Box>
          <Box
            mr={{base: 0, lg: '1rem'}}
            width={{base: '109px', lg: '300px'}}
            height={{base: '168px', lg: '440px'}}
            backgroundColor='tekArt.lightGrey'
            borderRadius={{base: '15px', lg: '37px'}}
          ></Box>
        </Box>
        <Box display='flex' mt={{base: '1rem', lg: 0}}>
          <Box
            mr='1rem'
            width={{base: '109px', lg: '300px'}}
            height={{base: '168px', lg: '440px'}}
            backgroundColor='tekArt.lightGrey'
            borderRadius={{base: '15px', lg: '37px'}}
          ></Box>
          <Box
            width={{base: '109px', lg: '300px'}}
            height={{base: '168px', lg: '440px'}}
            backgroundColor='tekArt.lightGrey'
            borderRadius={{base: '15px', lg: '37px'}}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default Ticket;
