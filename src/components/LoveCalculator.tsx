import React, { useState } from 'react';

import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';

import { loveQuotesData, nominateData } from '../constants/data';
import Score from './Score';

const LoveCalculator = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [random, setRandom] = useState(0);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleOkay = () => {
    setName1('');
    setName2('');
    onClose();
  };

  const handlePickRandom = () => {
    if (name1 && name2) {
      setLoading(true);
      const rand = Math.random() * 100;
      console.log(rand); // say 99.81321410836433

      setRandom(Math.floor(rand));
      setTimeout(() => {
        setLoading(false);
        onOpen();
      }, 1500);
    } else {
      toast({
        title: 'Invalid Input',
        description: 'Please fill in the two input fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

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
        mx={{base: '.7rem', lg: '7rem'}}
      >
        LOVE CALCULATOR
      </Text>
      <Box
        mx={{base: '.7rem', lg: '7rem'}}
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
        {['YOUR NAME', 'Partner’s Name'].map((item, i) => (
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
                value={i === 0 ? name1 : name2}
                onChange={
                  i === 0
                    ? (e) => setName1(e.target.value)
                    : (e) => setName2(e.target.value)
                }
              />
              {/* <Box mr='1rem'> */}
              <RadioGroup
                mt={{base: '.2rem', lg: '.6rem'}}
                defaultValue={i === 0 ? '1' : '2'}
              >
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
                    display={{base: 'flex', lg: 'none'}}
                    alignItems='center'
                    justifyContent='center'
                    onClick={handlePickRandom}
                    isLoading={loading}
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
                    display={{base: 'none', lg: 'flex'}}
                    onClick={handlePickRandom}
                    isLoading={loading}
                    alignItems='center'
                    justifyContent='center'
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
        // mx={{base: '2rem', lg: '3.2rem'}}
        mt={{base: '1.2rem', lg: '13.5rem'}}
        overflowX={'hidden'}
      >
        <Flex
          flexWrap={'nowrap'}
          className='track2'
          width={{base: '1180px', lg: '3604px'}}
        >
          {loveQuotesData.map(({quote, author}) => (
            <Flex
              justifyContent={'space-between'}
              alignItems='center'
              mr={{base: '1.5rem', lg: '2.5rem'}}
              flexShrink={0}
            >
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
                mx='.5rem'
              >
                ”{quote}”
                <Text fontWeight={{base: '900', lg: '500'}} mt='.4rem'>
                  – {author}
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
          ))}
        </Flex>

        <Flex
          justifyContent={'center'}
          mt='1.4rem'
          mx={{base: '2rem', lg: '3.2rem'}}
        >
          <a
            href='https://eventprime.co/e/unofficial-prom'
            target={'_blank'}
            rel='noreferrer'
          >
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
              GET TICKETS
            </Button>
          </a>
        </Flex>
      </Box>
      <Flex
        flexDirection={{base: 'column', lg: 'row'}}
        alignItems={{base: 'center'}}
        justifyContent={{lg: 'space-between'}}
        mx={{base: '3.7rem', lg: '6rem'}}
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
              mb={i === 2 ? '52.5px' : 0}
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
                <a
                  target={'_blank'}
                  rel='noreferrer'
                  href={
                    i === 0
                      ? 'https://tally.so/r/w2jyLV'
                      : i === 1
                      ? 'https://tally.so/r/3jeYLE'
                      : 'https://tally.so/r/mVpyxy'
                  }
                >
                  {text} &gt;
                </a>
              </Text>{' '}
            </Text>
          </Box>
        ))}
      </Flex>
      <Modal
        isCentered
        onClose={handleOkay}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        scrollBehavior='inside'
      >
        <ModalOverlay bg='tekArt.modalOverlay' />
        <ModalContent justifyContent={'center'} alignItems={'center'} bg='none'>
          <Score
            random={random}
            name1={name1}
            name2={name2}
            handleOkay={handleOkay}
          />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LoveCalculator;
