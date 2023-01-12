import React from 'react';

import { Box, Button, Text } from '@chakra-ui/react';

import { ticketsData } from '../constants/data';

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
          {[ticketsData[0], ticketsData[1]].map(
            ({price, title, package: pack}, i) => (
              <Box
                mr={{
                  base: i === 0 ? '1rem' : 0,
                  lg: i === 1 || i === 0 ? '1rem' : 0,
                }}
                width={{base: '109px', lg: '300px'}}
                height={{base: '168px', lg: '440px'}}
                backgroundColor='tekArt.lightGrey'
                borderRadius={{base: '15px', lg: '37px'}}
                bgColor={'rgba(193,0,0, 0.8)'}
                p={{base: '.65rem', lg: '1.4rem'}}
                pt={{base: '.9rem', lg: '2.1rem'}}
              >
                <Text
                  fontFamily='Public Sans'
                  fontStyle='normal'
                  fontWeight='800'
                  fontSize={{base: '16px', lg: '64px'}}
                  lineHeight='98.64%'
                  color='tekArt.white'
                >
                  {price}
                </Text>
                <Text
                  width={{base: '73px', lg: '160px'}}
                  fontFamily='Public Sans'
                  fontStyle='normal'
                  fontWeight='400'
                  fontSize={{base: '11px', lg: '24px'}}
                  lineHeight='98.64%'
                  color='tekArt.white'
                  mt={{base: '.5rem', lg: '.5rem'}}
                >
                  {title}
                </Text>
                <Text
                  width={{base: '97px', lg: '234px'}}
                  fontFamily='Playfair Display'
                  fontStyle='italic'
                  fontWeight='400'
                  fontSize={{
                    base: '12px',
                    lg: '36px',
                  }}
                  lineHeight='98.64%'
                  color='tekArt.white'
                  mt={{
                    base: pack.split(',').length === 4 ? '1.1rem' : '1.14rem',
                    lg: pack.split(',').length === 4 ? '2.1rem' : '2.5rem',
                  }}
                  mb={{
                    base: pack.split(',').length === 4 ? '.3rem' : '.8rem',
                    lg: pack.split(',').length === 4 ? '1.3rem' : '2.5rem',
                  }}
                >
                  {pack.split(',').map((item, index) => (
                    <>
                      {pack.split(',').length === 3 ? (
                        <Text
                          my={{
                            base: index === 1 ? '.09rem' : 0,
                            lg: index === 1 ? '.3rem' : 0,
                          }}
                        >
                          Event Access
                        </Text>
                      ) : (
                        <Text>Small Chops</Text>
                      )}
                    </>
                  ))}
                </Text>
                <a
                  href={
                    i === 0
                      ? 'https://eventprime.co/e/unofficial-prom/one_checkout/1938'
                      : 'https://eventprime.co/e/unofficial-prom/one_checkout/1940'
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button
                    width={{base: '71px', lg: '207px'}}
                    height={{base: '18px', lg: '51px'}}
                    background='tekArt.white'
                    borderRadius='11px'
                    fontFamily='Public Sans'
                    fontStyle='normal'
                    fontWeight='400'
                    fontSize={{base: '11px', lg: '32px'}}
                    lineHeight='98.64%'
                    color='tekArt.base'
                  >
                    Buy Now +
                  </Button>
                </a>
              </Box>
            ),
          )}
        </Box>
        <Box display='flex' mt={{base: '1rem', lg: 0}}>
          {[ticketsData[2], ticketsData[3]].map(
            ({price, title, package: pack}, i) => (
              <Box
                mr={{base: i === 0 ? '1rem' : 0, lg: i === 0 ? '1rem' : 0}}
                width={{base: '109px', lg: '300px'}}
                height={{base: '168px', lg: '440px'}}
                backgroundColor='tekArt.lightGrey'
                borderRadius={{base: '15px', lg: '37px'}}
                bgColor={'rgba(193,0,0, 0.8)'}
                p={{base: '.65rem', lg: '1.4rem'}}
                pt={{base: '.9rem', lg: '2.1rem'}}
              >
                <Text
                  fontFamily='Public Sans'
                  fontStyle='normal'
                  fontWeight='800'
                  fontSize={{base: '16px', lg: '64px'}}
                  lineHeight='98.64%'
                  color='tekArt.white'
                >
                  {price}
                </Text>
                <Text
                  fontFamily='Public Sans'
                  fontStyle='normal'
                  fontWeight='400'
                  lineHeight='98.64%'
                  color='tekArt.white'
                  mt={{lg: '.5rem'}}
                  width={{base: '84px', lg: '160px'}}
                  fontSize={{base: '11px', lg: '24px'}}
                >
                  {title}
                </Text>
                <Text
                  fontFamily='Playfair Display'
                  fontStyle='italic'
                  fontWeight='400'
                  lineHeight='98.64%'
                  color='tekArt.white'
                  mt={{
                    base: pack.split(',').length === 5 ? '.3rem' : '1rem',
                    lg: pack.split(',').length === 5 ? '2.6rem' : '.8rem',
                  }}
                  mb={{
                    base: pack.split(',').length === 5 ? '0.45rem' : '0.6rem',
                    lg: pack.split(',').length === 5 ? '1.8rem' : '2.5rem',
                  }}
                  width={{base: '97px', lg: '234px'}}
                  fontSize={{
                    base: '12px',
                    lg: pack.split(',').length === 3 ? '36px' : '24px',
                  }}
                >
                  {pack.split(',').map((item, index) => (
                    <>
                      {pack.split(',').length === 3 ? (
                        <Text
                          my={{
                            base: index === 1 ? '.3rem' : 0,
                            lg: index === 1 ? '.3rem' : 0,
                          }}
                        >
                          Event Access
                        </Text>
                      ) : (
                        <Text>Small Chops</Text>
                      )}
                    </>
                  ))}
                </Text>
                <a
                  href={
                    i === 0
                      ? ' https://eventprime.co/e/unofficial-prom/one_checkout/1939'
                      : 'https://eventprime.co/e/unofficial-prom/one_checkout/1941'
                  }
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button
                    background='tekArt.white'
                    borderRadius='11px'
                    fontFamily='Public Sans'
                    fontStyle='normal'
                    fontWeight='400'
                    lineHeight='98.64%'
                    color='tekArt.base'
                    width={{base: '71px', lg: '207px'}}
                    height={{base: '18px', lg: '51px'}}
                    fontSize={{base: '11px', lg: '32px'}}
                  >
                    Buy Now +
                  </Button>
                </a>
              </Box>
            ),
          )}
        </Box>
      </Box>
    </>
  );
};

export default Ticket;
