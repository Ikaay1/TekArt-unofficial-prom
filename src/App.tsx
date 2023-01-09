import React from 'react';

import { Box } from '@chakra-ui/react';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Box
        bgImage={'/assets/bg.png'}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center'
        h='100vh'
      >
        <Box
          pt={{base: '1.5rem', lg: '2.5rem'}}
          bgColor={'rgba(193,0,0, 0.8)'}
          w='100%'
          h='100%'
        >
          <HeroSection />
        </Box>
      </Box>
    </>
  );
}

export default App;
