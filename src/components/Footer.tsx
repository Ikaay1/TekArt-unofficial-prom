import React from 'react';

import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box>
      <Image
        src='/assets/tekArtFooterMobile.png'
        alt='TekArt Footer Logo'
        display={{lg: 'none'}}
        mx='auto'
      />
      <Image
        src='/assets/tekArtFooter.png'
        alt='TekArt Footer Logo'
        display={{base: 'none', lg: 'block'}}
        mx='auto'
      />
      <Text
        fontFamily='Public Sans'
        fontStyle='normal'
        fontWeight='800'
        fontSize={{base: '14px', lg: '36px'}}
        lineHeight='98.64%'
        color='tekArt.red'
        textAlign={'center'}
        mt={{base: '1rem', lg: '2.7rem'}}
      >
        February 2023
      </Text>
      <Text
        fontFamily='Public Sans'
        fontStyle='normal'
        fontWeight='700'
        fontSize={{base: '13px', lg: '32px'}}
        lineHeight='98.64%'
        color='tekArt.black'
        textAlign={'center'}
        mt={{base: '.5rem', lg: '2rem'}}
      >
        The Unofficial Prom from the organizers of TekArt
      </Text>
      <Text
        fontFamily='Public Sans'
        fontStyle='normal'
        fontWeight='500'
        fontSize={{base: '12px', lg: '32px'}}
        lineHeight='98.64%'
        color='tekArt.black'
        textAlign={'center'}
        mt={{base: '.6rem', lg: '3.1rem'}}
      >
        <a href='https://tally.so/r/n9NyOY' target='_blank' rel='noreferrer'>
          Become a sponsor{' '}
        </a>
        <Box as='span' mx={{base: '1rem', lg: '5rem'}}>
          |
        </Box>{' '}
        <a href='https://tally.so/r/me5lLO' target='_blank' rel='noreferrer'>
          Contact Us
        </a>
      </Text>
      <Divider
        my={{base: '1rem', lg: '3rem'}}
        h={{lg: '1.9px'}}
        color='tekArt.black2'
        backgroundColor={'tekArt.black'}
        w={{base: '295px', lg: '908px'}}
        mx='auto'
      ></Divider>
      <Flex
        w={{base: '101.25px', lg: '312px'}}
        mx='auto'
        justifyContent={'space-between'}
      >
        {['facebook', 'twitter', 'linkedIn', 'instagram'].map((item, i) => (
          <a
            href={
              i === 0
                ? 'https://www.facebook.com/digiupnigeria?mibextid=LQQJ4d'
                : i === 1
                ? 'https://www.twitter.com/tekartbydigiup'
                : i === 2
                ? 'https://www.linkedin.com/events/unofficialprom7019056682269876224/'
                : 'https://www.instagram.com/tekartcon'
            }
            target={'_blank'}
            rel='noreferrer'
          >
            <Image src={`/assets/${item}Mobile.png`} display={{lg: 'none'}} />
            <Image
              src={`/assets/${item}.png`}
              display={{base: 'none', lg: 'block'}}
            />
          </a>
        ))}
      </Flex>
      <Text
        fontFamily='Public Sans'
        fontStyle='normal'
        fontWeight='700'
        fontSize={{base: '11px', lg: '21px'}}
        lineHeight='98.64%'
        color='tekArt.black'
        textAlign={'center'}
        mt={{base: '.6rem', lg: '2.1rem'}}
      >
        Designed by{' '}
        <Box as='span' fontWeight='800' color='tekArt.red'>
          <a
            href='https://behance.net/thepsam'
            target='_blank'
            rel='noreferrer'
          >
            Psam
          </a>
        </Box>
        . Developed by{' '}
        <Box as='span' fontWeight='800' color='tekArt.red'>
          <a href='https://ikechi.com.ng' target='_blank' rel='noreferrer'>
            Ikechukwu
          </a>
        </Box>
      </Text>
    </Box>
  );
};

export default Footer;
