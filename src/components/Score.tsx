import React from 'react';

import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { loveCalcQuotesData } from '../constants/data';

const Score = ({
  handleOkay,
  name1,
  name2,
  random,
}: {
  handleOkay: () => void;
  name1: string;
  name2: string;
  random: number;
}) => {
  return (
    <Box
      bg='tekArt.orange'
      w={{lg: '818px'}}
      borderRadius={{base: '12px', lg: '27px'}}
      p={{base: '.6rem', lg: '2rem'}}
      pb={{base: '1rem', lg: '1.5rem'}}
      //   mx={{base: '2rem', lg: 0}}
    >
      <Text
        fontFamily='Playfair Display'
        fontStyle='normal'
        fontWeight='400'
        fontSize={{base: '14px', lg: '36px'}}
        lineHeight='112.64%'
        textAlign='center'
        color='tekArt.white'
      >
        For{' '}
        <Box as='span' fontStyle={'italic'} fontWeight={700}>
          {name1} & {name2}
        </Box>
      </Text>
      <Box id='container'>
        <Flex
          w={{base: '110px', lg: '251px'}}
          h={{base: '110px', lg: '251px'}}
          borderRadius={'50%'}
          bg='tekArt.white'
          justifyContent={'center'}
          align={'center'}
          fontFamily='Public Sans'
          fontStyle='normal'
          fontWeight='900'
          fontSize={{base: '25px', lg: '64px'}}
          lineHeight='112.64%'
          textAlign='center'
          mx='auto'
          color='tekArt.orange'
          mt={{base: '.8rem', lg: '1.6rem'}}
          className='Pulsating-Circle'
        >
          <Text zIndex={99}>{random}%</Text>
        </Flex>
        <div className='circle' style={{animationDelay: '-3s'}}></div>
        <div className='circle' style={{animationDelay: '-2s'}}></div>
        <div className='circle' style={{animationDelay: '-1s'}}></div>
        <div className='circle' style={{animationDelay: '0s'}}></div>
      </Box>

      <Text
        fontFamily='Playfair Display'
        fontStyle='normal'
        fontWeight='400'
        fontSize={{base: '11px', lg: '24px'}}
        lineHeight='112.64%'
        /* or 27px */
        textAlign='center'
        color='tekArt.white'
        w={{base: '250px', lg: '522px'}}
        mx='auto'
        my={{base: '.65rem', lg: '1.3rem'}}
      >
        {loveCalcQuotesData[Math.floor(Math.random() * 9 + 1 - 1)]}
      </Text>
      <Flex justifyContent={'center'}>
        <Button
          onClick={handleOkay}
          width={{base: '85px', lg: '128px'}}
          height={{base: '31px', lg: '46px'}}
          background='#C10000'
          borderRadius={{base: '9px', lg: '14px'}}
          fontFamily='Public Sans'
          fontStyle='normal'
          fontWeight='500'
          fontSize={{base: '11px', lg: '20px'}}
          lineHeight='162.14%'
          color='tekArt.white'
        >
          Go again!
        </Button>
      </Flex>
    </Box>
  );
};

export default Score;
