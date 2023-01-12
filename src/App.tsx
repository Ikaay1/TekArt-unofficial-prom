import React from 'react';

import { Box } from '@chakra-ui/react';

import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LoveCalculator from './components/LoveCalculator';
import Navbar from './components/Navbar';
import Styles from './components/Styles';
import Ticket from './components/Ticket';

function App() {
  return (
    <>
      <Navbar />
      <Box
        bgImage={'/assets/bg.png'}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center'
      >
        <Box
          pt={{base: '1.5rem', lg: '2.5rem'}}
          bgColor={'rgba(193,0,0, 0.8)'}
          w='100%'
        >
          <HeroSection />
          <Box mt={{base: '14rem', lg: '30rem'}}>
            <Styles />
          </Box>
        </Box>
        <Box
          py={{base: '1.5rem', lg: '3rem'}}
          px={{base: '1.2rem', lg: '2.3rem'}}
          bgColor={'rgb(255,249,249, 0.9)'}
          w='100%'
        >
          <Ticket />
        </Box>
        <Box bgColor={'rgba(193,0,0, 0.8)'} w='100%'>
          <LoveCalculator />
        </Box>
        <Box
          py={{base: '.5rem', lg: '.5rem'}}
          pb={{base: '1.5rem', lg: '4rem'}}
          px={{base: '1.2rem', lg: '2.3rem'}}
          bgColor={'rgb(255,249,249, 0.9)'}
          w='100%'
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
