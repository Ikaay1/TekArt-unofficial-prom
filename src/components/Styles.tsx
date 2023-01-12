import React, { useEffect, useState } from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { imageUrls, timeData } from '../constants/data';

// 2023-02-18T14:00:00+01:00
const Styles = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2023-02-18T14:00:00+01:00') - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60) / 24),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Box>
      <Box
        display={{lg: 'flex'}}
        justifyContent={'space-between'}
        mx={{base: '2rem', lg: '3rem'}}
      >
        <Box
          w={{lg: '556px'}}
          display={{lg: 'flex'}}
          flexDirection='column'
          justifyContent={'center'}
          textAlign={'center'}
          id='styles'
        >
          <Text
            fontFamily='Playfair Display'
            fontStyle='normal'
            fontWeight='500'
            fontSize={{base: '36px', lg: '74px'}}
            lineHeight='98.64%'
            color='tekArt.white'
          >
            Choose your own style
          </Text>
          <Box
            fontFamily='Public Sans'
            fontStyle='normal'
            //   fontWeight='800'
            fontSize={{base: '16px', lg: '32px'}}
            lineHeight='98.64%'
            color='tekArt.white'
            mt='1.55rem'
          >
            <Text fontWeight='800'>Dress Code:</Text>
            <Box mt='1.4rem'>
              <Box as='span' fontWeight='500'>
                Traditional Corporate
              </Box>{' '}
              <Box as='span' fontStyle={'italic'} fontWeight='300'>
                ( Agbada, Senator, dansiki, igwe, gown, e.tc)
              </Box>
            </Box>
            <Box mt='1.4rem'>
              <Box as='span' fontWeight='500'>
                Modern Corporate
              </Box>{' '}
              <Box as='span' fontStyle={'italic'} fontWeight='300'>
                ( Suits, Tuxedo, Bow Tie Gowns)
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          mt={{base: '1.3rem', lg: 0}}
          mx={{base: 'auto', lg: 0}}
          w={{base: '308px', lg: '680px'}}
        >
          <Flex justifyContent={'space-between'}>
            {[imageUrls[0], imageUrls[1]].map((url) => (
              <Image
                borderRadius={{base: '9px', lg: '11px'}}
                w='48%'
                src={`/assets/${url}.jpg`}
              />
            ))}
          </Flex>
          <Flex mt='1rem' justifyContent={'space-between'}>
            {[imageUrls[2], imageUrls[3]].map((url) => (
              <Image
                borderRadius={{base: '9px', lg: '11px'}}
                w='48%'
                src={`/assets/${url}.jpg`}
              />
            ))}
          </Flex>
        </Box>
      </Box>
      <Box
        display={{lg: 'flex'}}
        justifyContent={'space-between'}
        backgroundColor='tekArt.white'
        borderRadius={{base: '15px', lg: '51px'}}
        p={{base: '1rem', lg: '2.5rem'}}
        alignItems='center'
        my={{base: '1.2rem', lg: '2.5rem'}}
        mx={{base: '1.5rem', lg: '3rem'}}
      >
        <Text
          w={{base: '100%', lg: '558px'}}
          fontFamily='Public Sans'
          fontStyle='normal'
          fontWeight='500'
          fontSize={{base: '13px', lg: '36px'}}
          lineHeight={{lg: '98.64%'}}
          color='tekArt.base'
          textAlign={{base: 'center', lg: 'left'}}
        >
          Secure your tickets and prepare to experience love in a new dimension
        </Text>
        <Flex
          alignItems={'center'}
          justifyContent={{base: 'space-between', lg: 'flex-start'}}
          mt={{base: '0.5rem', lg: 0}}
        >
          {timeData.map((eachData, i) => (
            <Box
              display={'flex'}
              flexDirection='column'
              justifyContent={'center'}
              textAlign={'center'}
              mr={{base: i !== 3 ? '1rem' : 0, lg: i !== 3 ? '2.3rem' : 0}}
            >
              <Text
                fontFamily='Public Sans'
                fontStyle='normal'
                fontWeight='800'
                fontSize={{base: '40px', lg: '96px'}}
                lineHeight={{lg: '98.64%'}}
                color='tekArt.secondaryGrey2'
              >
                {i === 0
                  ? timeLeft?.days
                  : i === 1
                  ? timeLeft.hours
                  : i === 2
                  ? timeLeft.minutes
                  : timeLeft.seconds}
              </Text>
              <Text
                fontFamily='Public Sans'
                fontStyle='normal'
                fontWeight='500'
                fontSize={{base: '13px', lg: '32px'}}
                lineHeight={{lg: '98.64%'}}
                color='tekArt.secondaryGrey2'
              >
                {eachData.day}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
      <Box pb={{base: '1.5rem', lg: '2rem'}}>
        <Text
          fontFamily='Playfair Display'
          fontStyle='normal'
          fontWeight='900'
          fontSize={{base: '24px', lg: '74px'}}
          lineHeight='98.64%'
          color='tekArt.white'
          textAlign={'center'}
          display='flex'
          alignItems={'center'}
          w={{base: '255px', lg: '740px'}}
          mx='auto'
        >
          Feb 18th <div className='ball'></div> 2pm - 7pm{' '}
        </Text>
        <Text
          fontFamily='Playfair Display'
          fontStyle='normal'
          fontWeight='500'
          fontSize={{base: '16px', lg: '40px'}}
          lineHeight='98.64%'
          color='tekArt.white'
          textAlign={'center'}
          mt={{base: '.8rem', lg: '1.2rem'}}
        >
          17a, Commercial Avenue, Yaba Lagos
        </Text>
      </Box>
    </Box>
  );
};

export default Styles;
