
import './App.css';

import { ChakraProvider, HStack, IconButton, VStack } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import { Flex, Spacer, Image } from '@chakra-ui/react';
import { FaLaptopCode, FaTerminal } from 'react-icons/fa';


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
            <Image size 
              boxSize='300px' src="/headshot.jpg" />
          </Flex>
        
        </HStack>
        
        
      </ChakraProvider>
    );
  }

export default App;
