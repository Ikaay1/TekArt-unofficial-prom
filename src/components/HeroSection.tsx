import React from 'react';

import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      display={{base: 'block', lg: 'flex'}}
      position='relative'
      justifyContent={'space-between'}
    >
      <Box w={{lg: '620px'}}>
        <Image
          src='/assets/tekArt.png'
          display={{base: 'none', lg: 'block'}}
          alt='TekArt logo'
        />
        <Image
          src='/assets/tekArtMobile.png'
          display={{lg: 'none'}}
          alt='TekArt logo'
        />
        <Text
          ml={{base: '2.3rem', lg: '2.7rem'}}
          fontFamily='Playfair Display'
          fontStyle='italic'
          fontWeight='500'
          fontSize='64px'
          lineHeight='63px'
          color='tekArt.white'
          mt={{lg: '1rem'}}
        >
          Love is in your city
        </Text>
        <Flex
          ml={{base: '2.3rem', lg: '2.7rem'}}
          mt={{base: '1.3rem', lg: '2rem'}}
        >
          <a
            href='https://eventprime.co/e/unofficial-prom'
            target={'_blank'}
            rel='noreferrer'
          >
            <Button
              background='tekArt.white2'
              width={{base: '141px', lg: '242px'}}
              height={{base: '36px', lg: '63px'}}
              display='flex'
              justifyContent={'center'}
              alignItems='center'
              borderRadius={{base: '6px', lg: '19px'}}
              fontSize={{lg: '36px'}}
              fontFamily={'Public Sans'}
              color='tekArt.base'
              mr={{lg: '1rem'}}
            >
              Get Ticket
            </Button>
          </a>
          <a href='#styles'>
            <Button
              background='transparent'
              width={{lg: '242px'}}
              height={{lg: '63px'}}
              justifyContent={'center'}
              alignItems='center'
              borderRadius='19px'
              fontSize={{lg: '36px'}}
              fontFamily={'Public Sans'}
              color='tekArt.white'
              border='1px solid white'
              display={{base: 'none', lg: 'flex'}}
            >
              Learn More
            </Button>
          </a>
        </Flex>
      </Box>
      <Flex mt={{base: '1.5rem', lg: 0}}>
        <Image
          w={{base: '315px', lg: '430px'}}
          h={{base: '415px', lg: '545px'}}
          ml={{base: '-65px', lg: 0}}
          // border='1px solid blue'
          objectFit={'cover'}
          src='/assets/girl.png'
        />
        <Image
          w={{base: '255px', lg: '365px'}}
          h={{base: '535px', lg: '680px'}}
          ml={{base: '-130px', lg: '-180px'}}
          // border='1px solid blue'
          objectFit={'cover'}
          src='/assets/boy.png'
        />
      </Flex>
      <Image
        position={'absolute'}
        bottom='-19.5%'
        left='0'
        w='100%'
        src='/assets/aboutMobile.png'
        alt=''
        display={{lg: 'none'}}
      />
      <Image
        position={'absolute'}
        bottom='-56.5%'
        left='0'
        w='100%'
        h='600px'
        src='/assets/about.png'
        alt=''
        display={{base: 'none', lg: 'block'}}
      />
    </Box>
  );
};

export default HeroSection;
