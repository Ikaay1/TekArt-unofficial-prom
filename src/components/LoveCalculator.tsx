import React from 'react';

import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
} from '@chakra-ui/react';

const LoveCalculator = () => {
  return (
    <Box pt='6.37rem' pb={{base: '3rem', lg: '4rem'}}>
      <Text
        width='146px'
        fontFamily='Playfair Display'
        fontStyle='italic'
        fontWeight='800'
        fontSize='20px'
        lineHeight='96.14%'
        ml='auto'
        color='#FFFFFF'
        mb='1.45rem'
        display={{lg: 'none'}}
      >
        LOVE CALCULATOR
      </Text>
      <Box
        pl={{base: '2.2rem', lg: '12rem'}}
        pt={{base: '3.4rem', lg: '1rem'}}
        pr={{base: '1.4rem', lg: '5rem'}}
        pb={{base: '.65rem', lg: '1.8rem'}}
        background='#FE9D18'
        borderRadius='12px'
        position={'relative'}
        w={{lg: '818px'}}
        ml={{lg: 'auto'}}
      >
        <Text
          fontFamily='Playfair Display'
          fontStyle='italic'
          fontWeight='800'
          fontSize='48px'
          lineHeight='162.14%'
          color='#FFFFFF'
          mb='2rem'
          display={{base: 'none', lg: 'block'}}
        >
          LOVE CALCULATOR
        </Text>
        {['YOUR NAME', 'PARENTS NAME'].map((item, i) => (
          <Flex mt='.4rem' justifyContent={'space-between'}>
            <Text
              fontFamily='Public Sans'
              fontStyle='normal'
              fontWeight='600'
              fontSize='15px'
              lineHeight='124.14%'
              color='tekArt.white'
              w='53px'
              display={{lg: 'none'}}
            >
              {item}
            </Text>
            <Text
              fontFamily='Public Sans'
              fontStyle='normal'
              fontWeight='400'
              fontSize='36px'
              lineHeight='162.14%'
              color='tekArt.white'
              display={{base: 'none', lg: 'block'}}
            >
              Name:
            </Text>
            <Box>
              <Input
                w={{base: '236px', lg: '386px'}}
                h={{base: '38px', lg: '53px'}}
                backgroundColor={'tekArt.white'}
                borderRadius='5px'
              />
              {/* <Box mr='1rem'> */}
              <RadioGroup mt={{base: '.2rem', lg: '.6rem'}} defaultValue='1'>
                <Stack spacing={5} direction='row'>
                  <Radio mr={{base: '.5rem', lg: '0.95rem'}} value='1'>
                    <Box
                      as='span'
                      fontFamily='Public Sans'
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize={{base: '13px', lg: '24px'}}
                      color={'tekArt.white'}
                      lineHeight='162.14%'
                    >
                      Male
                    </Box>
                  </Radio>
                  <Radio value='2'>
                    <Box
                      as='span'
                      fontFamily='Public Sans'
                      fontStyle='normal'
                      fontWeight='700'
                      fontSize={{base: '13px', lg: '24px'}}
                      color={'tekArt.white'}
                      lineHeight='162.14%'
                    >
                      Female
                    </Box>
                  </Radio>
                </Stack>
              </RadioGroup>
              {i === 1 && (
                <>
                  <Button
                    mt='1rem'
                    fontFamily='Public Sans'
                    fontStyle='normal'
                    fontWeight='500'
                    fontSize='11px'
                    color={'tekArt.white'}
                    lineHeight='162.14%'
                    bg='tekArt.base'
                    display={{lg: 'none'}}
                  >
                    Calculate Love
                  </Button>
                  <Button
                    mt='1rem'
                    fontFamily='Public Sans'
                    fontStyle='normal'
                    fontWeight='500'
                    fontSize='20px'
                    color={'tekArt.white'}
                    lineHeight='162.14%'
                    bg='tekArt.base'
                    display={{base: 'none', lg: 'block'}}
                  >
                    Calculate
                  </Button>
                </>
              )}
            </Box>
          </Flex>
        ))}
        <Image
          position='absolute'
          top='-55%'
          left='2.2rem'
          src='/assets/love.png'
          display={{lg: 'none'}}
        />
        <Image
          position='absolute'
          top='25%'
          left='-35%'
          src='/assets/loveDesktop.png'
          display={{base: 'none', lg: 'block'}}
        />
      </Box>
      <Box
        mx={{base: '2rem', lg: '3.2rem'}}
        mt={{base: '1.2rem', lg: '13.5rem'}}
      >
        <Flex justifyContent={'space-between'} alignItems='center'>
          <Text
            fontFamily='Public Sans'
            fontStyle='normal'
            fontWeight='900'
            fontSize={{base: '15px', lg: '32px'}}
            lineHeight='145.14%'
            color='tekArt.white'
          >
            &lt;
          </Text>
          <Text
            width={{base: '295px', lg: '901px'}}
            fontFamily='Playfair Display'
            fontStyle='normal'
            fontWeight='500'
            fontSize={{base: '10px', lg: '32px'}}
            lineHeight='145.14%'
            color='tekArt.white'
            textAlign={'center'}
          >
            ”I fell in love with her courage, her sincerity, and her flaming
            self respect. And it’s these things I’d believe in, even if the
            whole world indulged in wild suspicions that she wasn’t all she
            should be. I love her and it is the beginning of everything.”
            <Text fontWeight={{base: '900', lg: '500'}} mt='.4rem'>
              – F. Scott Fitzgerald
            </Text>
          </Text>
          <Text
            fontFamily='Public Sans'
            fontStyle='normal'
            fontWeight='900'
            fontSize={{base: '15px', lg: '32px'}}
            lineHeight='145.14%'
            color='tekArt.white'
          >
            &gt;
          </Text>
        </Flex>
        <Flex justifyContent={'center'} mt='1.4rem'>
          <Button
            boxSizing='border-box'
            width={{base: '126px', lg: '293px'}}
            height={{base: '35px', lg: '64px'}}
            border='1px solid #FFFFFF'
            borderRadius={{base: '7px', lg: '20px'}}
            backgroundColor='transparent'
            color='tekArt.white'
            fontSize={{base: '11px', lg: '32px'}}
            lineHeight='145.14%'
            fontWeight='500'
            fontFamily='Public Sans'
          >
            <a
              href='https://eventprime.co/e/unofficial-prom'
              target={'_blank'}
              rel='noreferrer'
            >
              GET TICKETS
            </a>
          </Button>
        </Flex>
      </Box>
      <Flex
        flexDirection={{base: 'column', lg: 'row'}}
        alignItems={{base: 'center'}}
        justifyContent={{lg: 'space-between'}}
        mx={{base: '3rem', lg: 0}}
        mt={{base: '.2rem', lg: '2.2rem'}}
      >
        {nominateData.map(({image, text}, i) => (
          <Box
            w={{base: '256px', lg: '341.48px'}}
            pl={{base: '1.5rem', lg: '1rem'}}
            pb={{base: '1.5rem', lg: '2rem'}}
            pt={{base: '2.5rem', lg: '1rem'}}
            pr={{base: '1.3rem', lg: '2rem'}}
            justifyContent='space-between'
            backgroundColor={'white'}
            borderRadius={{base: '11px'}}
            display={{base: 'flex', lg: 'block'}}
            mt={{base: '1rem', lg: 0}}
            alignItems='flex-start'
          >
            <Image src={`/assets/${image}.png`} display={{lg: 'none'}} />
            <Image
              src={`/assets/${image}Desktop.png`}
              display={{base: 'none', lg: 'block'}}
              mb={i === 2 ? '36.05px' : 0}
            />
            <Text
              width={{base: '149px', lg: i === 2 ? '277px' : '262.12px'}}
              height={{base: '41px', lg: '126.25px'}}
              fontFamily='Public Sans'
              fontStyle='normal'
              fontWeight='500'
              fontSize={{base: '15px', lg: '32px'}}
              lineHeight='98.64%'
              color='tekArt.black'
              mt={{lg: '.9rem'}}
            >
              Click here to nominate{' '}
              <Text
                mt={{base: '.3rem'}}
                fontFamily={'Playfair Display'}
                fontStyle='italic'
                fontWeight={800}
              >
                {text} &gt;
              </Text>{' '}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

const nominateData = [
  {image: 'queen', text: 'Prom Queen'},
  {image: 'king', text: 'Prom King'},
  {image: 'superstar', text: 'Prom SuperStar'},
];

export default LoveCalculator;
