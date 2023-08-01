
import './App.css';

import { ChakraProvider, HStack,  } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import { Flex, Image } from '@chakra-ui/react';




const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

function App() {
    return (
      
      <ChakraProvider theme={theme}>
        
        <Navigation />
       
        
        <HStack spacing='80px'>
          <Flex>
          <Profile/>
          </Flex>
          
          <Flex>
            <Image boxSize='300px' src={process.env.PUBLIC_URL + "/images/1684809288078.jpg"} alt='headshot'/>
          </Flex>
        
        </HStack>
        
        
      </ChakraProvider>
    );
  }

export default App;
