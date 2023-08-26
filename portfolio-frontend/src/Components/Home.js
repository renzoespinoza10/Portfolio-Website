import '../App.css';

import { ChakraProvider, HStack, VStack, Button, Box, useMediaQuery } from "@chakra-ui/react";
import { Link, Element } from 'react-scroll';
import { extendTheme } from "@chakra-ui/react";

import Profile from './Profile';
import { Flex, Image } from '@chakra-ui/react';


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
        margin: 0
      },
    },
  },
});


export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <ChakraProvider theme={theme}>
      
      

      <Box textAlign="center"> {/* Center the button */}
        {isMobile ? (
          <VStack spacing={4} align="center">
            <Flex>
              <Profile />
            </Flex>
            <Flex>
              <Image
                boxSize="120px"
                src={process.env.PUBLIC_URL + "/images/1684809288078.jpg"}
                alt="headshot"
                mx="auto"
              />
            </Flex>
          </VStack>
        ) : (
          <HStack spacing='80px'>
            <Flex>
              <Profile />
            </Flex>
            <Flex>
              <Image
                boxSize="300px"
                src={process.env.PUBLIC_URL + "/images/1684809288078.jpg"}
                alt="headshot"
              />
            </Flex>
          </HStack>
        )}
        
        {/* Center the "View Resume" button */}
        <Box mt={4}>
          <Link to="resumeSection" smooth={true} duration={500}>
            <Button colorScheme="teal">
              View Resume
            </Button>
          </Link>
        </Box>
      </Box>
      <Element name="resumeSection">
        <Box textAlign="center"> {/* Center the resume content */}
          <Box
            position="absolute"
            top="180%"
            style={{ left: "25%" }}
            py={10}
          >
            <embed
              src={process.env.PUBLIC_URL + "/pdfs/renzoE2023SummerResume.pdf"}
              type="application/pdf"
              width={isMobile ? "100%" : "800px"}
              height="800px"
            />
            <Link to="headerSection" smooth={true} duration={500}>
              <Button colorScheme="teal" mt={4}>
                Back to Top
              </Button>
            </Link>
          </Box>
        </Box>
      </Element>
        
    </ChakraProvider>
  );
}

